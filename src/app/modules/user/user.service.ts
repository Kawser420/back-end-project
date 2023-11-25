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

const addProductToOrder = async (
  userId: string,
  productName: string,
  price: number,
  quantity: number,
) => {
  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return null;
    }

    if (!user.orders) {
      user.orders = [];
    }

    const newProduct = {
      productName,
      price,
      quantity,
    };

    user.orders.push(newProduct);
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const UserServices = {
  createUserInToDB,
  getAllUsersFromDB,
  getSingleUsersFromDB,
  getUpdateUsersFromDB,
  deleteUser,
  addProductToOrder,
};
