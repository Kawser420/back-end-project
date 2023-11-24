import { Schema, model } from 'mongoose';
import { User } from './user.interface';

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
    required: [true, 'age is a required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    trim: true,
  },
  isActive: {
    type: Boolean,
    required: [true, 'isActive required'],
  },
  hobbies: {
    type: String,
    enum: ['codding', 'movies', 'football', 'cricket'],
    required: [true, 'Hobbits is required'],
  },
  address: {
    street: {
      type: String,
      required: [true, 'street is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'city is a required'],
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'country is required'],
      trim: true,
    },
  },
  orders: {
    productName: {
      type: String,
      required: [true, 'Product is a required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    quantity: {
      type: Number,
      enum: [1, 10, 8, 33],
      required: [true, 'Quantity is required'],
    },
  },
});

const User = model<User>('User', userSchema);

export default User;
