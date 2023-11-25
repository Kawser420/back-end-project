import { User } from './user.interface';
import UserModel from './user.model';

const createUserInToDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUsersFromDB = async (id: string) => {
  const result = await UserModel.findOne({ id });
  return result;
};

const getUpdateUsersFromDB = async (userId: string, updatedUserData: User) => {
  const updateResult = await UserModel.findOneAndUpdate(
    { id: userId },
    updatedUserData,
    { new: true },
  );
  return updateResult;
};

const deleteUser = async (userId: string) => {
  const deleteResult = await UserModel.deleteOne({ id: userId });
  return deleteResult.deletedCount > 0;
};

export const UserServices = {
  createUserInToDB,
  getAllUsersFromDB,
  getSingleUsersFromDB,
  getUpdateUsersFromDB,
  deleteUser,
};
