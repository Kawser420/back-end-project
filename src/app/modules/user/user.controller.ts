import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const zodParsedData = userValidationSchema.parse(userData);
  const result = await UserServices.createUserInToDB(zodParsedData);

  sendResponse(res, {
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getAllUsersFromDB();

  const allUsers = result.map(
    ({ username, fullName, age, email, address, orders }) => ({
      username,
      fullName: {
        firstName: fullName.firstName,
        lastName: fullName.lastName,
      },
      age,
      email,
      address: {
        street: address.street,
        city: address.city,
        country: address.country,
      },
      orders,
    }),
  );

  sendResponse(res, {
    success: true,
    message: 'Users fetched successfully!',
    data: allUsers,
  });
});

const getSingleUsers = catchAsync(async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId, 10);
  const result = await UserServices.getSingleUsersFromDB(userId);

  if (!result) {
    throw new Error('User not found');
  }

  sendResponse(res, {
    success: true,
    message: 'User fetched successfully!',
    data: result,
  });
});

const getUpdateUsers = catchAsync(async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId, 10);
  const updatedUserData = req.body;

  const updatedUserResult = await UserServices.getUpdateUsersFromDB(
    userId,
    updatedUserData,
  );

  if (!updatedUserResult) {
    throw new Error('User not found');
  }

  sendResponse(res, {
    success: true,
    message: 'User updated successfully!',
    data: updatedUserResult,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId);

  const deleteResult = await UserServices.deleteUserFromDB(userId);

  if (!deleteResult) {
    throw new Error('User not found');
  }

  sendResponse(res, {
    success: true,
    message: 'User deleted successfully!',
    data: null,
  });
});

const addProductOrder = catchAsync(async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId, 10);
  const orderData = req.body;

  const result = await UserServices.addProductToUserData(userId, orderData);

  if (!result) {
    throw new Error('User not found');
  }

  sendResponse(res, {
    success: true,
    message: 'Order created successfully!',
    data: null,
  });
});

const allOrders = catchAsync(async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId, 10);
  const result = await UserServices.getAllOrders(userId);

  if (!result) {
    throw new Error('User not found');
  }

  sendResponse(res, {
    success: true,
    message: 'Orders fetched successfully!',
    data: { orders: result },
  });
});

const totalPrice = catchAsync(async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId, 10);
  const result = await UserServices.getTotalPrice(userId);

  if (result === null) {
    throw new Error('User not found');
  }

  sendResponse(res, {
    success: true,
    message: 'Total price calculated successfully!',
    data: { totalPrice: result },
  });
});

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
  getUpdateUsers,
  deleteUser,
  addProductOrder,
  allOrders,
  totalPrice,
};
