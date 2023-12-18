import { TUser } from './user.interface';
import { User } from './user.model';

//
const createUserInToDB = async (userData: TUser) => {
  // build in static method in userId & userName
  if (await User.isUserIdExists(userData.userId, userData.username)) {
    throw new Error('User already exists!');
  }

  const result = await User.create(userData);
  return result;
};
//

//
const getAllUsersFromDB = async () => {
  // here is requirement: username, fullName, age, email, address
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
//

//
const getSingleUsersFromDB = async (userId: number): Promise<TUser | null> => {
  try {
    const user = await User.findOne(
      { userId },
      {
        userId: 1,
        username: 1,
        'fullName.firstName': 1,
        'fullName.lastName': 1,
        age: 1,
        email: 1,
        isActive: 1,
        hobbies: 1,
        'address.street': 1,
        'address.city': 1,
        'address.country': 1,
      },
    );

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
//

//
const getUpdateUsersFromDB = async (userId: number, updatedUserData: TUser) => {
  // update filed
  const updateResult = await User.findOneAndUpdate(
    { userId },
    updatedUserData,
    { new: true },
  );
  return updateResult;
};
//

//
const deleteUserFromDB = async (userId: number) => {
  const deleteResult = await User.deleteOne({ userId: userId });
  return deleteResult.deletedCount > 0;
};
//

//
const addProductToOrder = async (
  userId: number,
  orderData: { productName: string; price: number; quantity: number },
): Promise<void> => {
  if (isNaN(userId)) {
    throw new Error('Invalid userId.');
  }
  try {
    const user = await User.findOne({ userId });

    if (!user) {
      throw new Error('User not found');
    }

    if (!user.orders) {
      user.orders = [];
    }
    user.orders.push(orderData);
    await user.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//

//

const getAllOrders = async (userId: number): Promise<Array<unknown>> => {
  const user = await User.findOne({ userId });
  if (!user) {
    throw new Error('User not found');
  }
  return user.orders || [];
};
//

//
const getTotalPrice = async (userId: number): Promise<number> => {
  const user = await User.findOne({ userId });
  if (!user) {
    throw new Error('User not found');
  }

  let totalPrice = 0;

  for (const order of user.orders || []) {
    totalPrice += order.price * order.quantity;
  }

  return totalPrice;
};

export const UserServices = {
  createUserInToDB,
  getAllUsersFromDB,
  getSingleUsersFromDB,
  getUpdateUsersFromDB,
  deleteUserFromDB,
  addProductToOrder,
  getAllOrders,
  getTotalPrice,
};
