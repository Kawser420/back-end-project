import { User } from './user.interface';
import UserModel from './user.model';

const createUserInToDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

export const UserServices = {
  createUserInToDB,
};
