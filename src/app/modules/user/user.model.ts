import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const orderSchema = new Schema({
  productName: {
    type: String,
    required: [true, 'Product Name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});

export const userSchema = new Schema<TUser, UserModel>(
  {
    userId: {
      type: Number,
      required: [true, 'User Id is required'],
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: [true, 'username is required'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      trim: true,
    },
    fullName: {
      firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
      },
      lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
      },
    },
    age: {
      type: Number,
      required: [true, 'age is required'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    hobbies: {
      type: [String],
      required: [true, 'Hobbies is required'],
    },
    address: {
      street: {
        type: String,
        required: [true, 'street is required'],
        trim: true,
      },
      city: {
        type: String,
        required: [true, 'city is required'],
        trim: true,
      },
      country: {
        type: String,
        required: [true, 'country is required'],
        trim: true,
      },
    },
    orders: [orderSchema],
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.orders;
        delete ret.password;
        return ret;
      },
    },
  },
);

// middleware and password----> bcrypt and hash
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc

  // hashing password and save into DB
  if (!user.isModified('password')) {
    return next();
  }
  const hashedPassword = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  user.password = hashedPassword;
  next();
});

// post-->password is ----> ''
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

//  Retrieve a specific user by ID & use static method
userSchema.statics.findByUserId = function (userId, projection) {
  return this.findOne({ userId }, projection);
};

// creating a static method in userId and username
userSchema.statics.isUserIdExists = async function (
  userId: number,
  username: string,
) {
  return this.findOne({ userId, username });
};

// here is Orders in static method
// userSchema.statics.addProductToOrder = async function (userId, orderData) {
//   const user = await this.findOne({ userId });

//   if (!user) {
//     throw new Error('User not found');
//   }

//   if (!user.orders) {
//     user.orders = [];
//   }

//   user.orders.push({
//     productName: orderData.productName,
//     price: orderData.price,
//     quantity: orderData.quantity,
//   });

//   await user.save();
//   return null;
// };

export const User = model<TUser, UserModel>('User', userSchema);
