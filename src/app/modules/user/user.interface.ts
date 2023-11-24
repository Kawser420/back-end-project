// import { Schema, model, connect } from 'mongoose';

export interface User {
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
  hobbies: ['codding,', 'movies', 'football', 'cricket'];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: {
    productName: string;
    price: number;
    quantity: [1, 10, 8, 33];
  };
}
