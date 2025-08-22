import { TOrder, TUser } from './user.interface';
import { User } from './user.model';

const createUserInToDB = async (userData: TUser) => {
  const existingUserId = await User.isUserIdExists(userData.userId);
  if (existingUserId) {
    throw new Error('userId already exists!');
  }

  const existingUsername = await User.isUserNameExists(userData.username);
  if (existingUsername) {
    throw new Error('username already exists!');
  }

  const result = await User.create(userData);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find(
    {},
    {
      username: 1,
      'fullName.firstName': 1,
      'fullName.lastName': 1,
      age: 1,
      email: 1,
      'address.street': 1,
      'address.city': 1,
      'address.country': 1,
      orders: 1,
    },
  );
  return result;
};

const getSingleUsersFromDB = async (userId: number): Promise<TUser | null> => {
  const user = await User.findOne(
    { userId },
    {
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
    },
  );
  return user;
};

const getUpdateUsersFromDB = async (
  userId: number,
  updatedUserData: Partial<TUser>,
) => {
  const user = await User.findOneAndUpdate({ userId }, updatedUserData, {
    new: true,
    runValidators: true,
  });
  return user;
};

const deleteUserFromDB = async (userId: number) => {
  const deleteResult = await User.deleteOne({ userId });
  return deleteResult.deletedCount > 0;
};

const addProductToUserData = async (
  userId: number,
  orderData: TOrder,
): Promise<TUser | null> => {
  const user = await User.findOneAndUpdate(
    { userId },
    { $push: { orders: orderData } },
    { new: true, runValidators: true },
  );
  return user;
};

const getAllOrders = async (userId: number) => {
  const user = await User.findOne({ userId });
  if (!user) {
    return null;
  }
  return user.orders || [];
};

const getTotalPrice = async (userId: number): Promise<number | null> => {
  const user = await User.findOne({ userId });
  if (!user) {
    return null;
  }
  const totalPrice = (user.orders || []).reduce(
    (acc, order) => acc + order.price * order.quantity,
    0,
  );
  return totalPrice;
};

export const UserServices = {
  createUserInToDB,
  getAllUsersFromDB,
  getSingleUsersFromDB,
  getUpdateUsersFromDB,
  deleteUserFromDB,
  addProductToUserData,
  getAllOrders,
  getTotalPrice,
};
