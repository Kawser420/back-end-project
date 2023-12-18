import { Model } from 'mongoose';

export type TOrder = {
  productName: string;
  price: number;
  quantity: number;
};

export type TUser = {
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
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: TOrder[];
};

// for creating static ---->
export interface UserModel extends Model<TUser> {
  isUserIdExists(userId: number, username: string): Promise<TUser | null>;
}
