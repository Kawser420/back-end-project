import { Document } from 'mongoose';

export interface User extends Document {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: ('coding' | 'movies' | 'football' | 'cricket')[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Order[];
}

export interface Order {
  productName: string;
  price: number;
  quantity: number;
}
