import { Schema, model } from 'mongoose';
import { User } from './user.interface';

const orderSchema = new Schema({
  productName: {
    type: String,
    required: [true, 'productName is required'],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'quantity is required'],
  },
});

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    required: [true, 'User Id is required'],
  },
  username: {
    type: String,
    required: [true, 'username is required'],
    trim: true,
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
    required: [true, 'isActive is required'],
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
});

const UserModel = model<User>('User', userSchema);

export default UserModel;
