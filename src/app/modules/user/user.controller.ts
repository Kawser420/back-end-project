import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await UserServices.createUserInToDB(userData);

    //send response
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succuss: false,
      message: 'User Server Error',
      data: null,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();

    //send response
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User:id get successfully',
      data: null,
    });
  }
};

const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const result = await UserServices.getSingleUsersFromDB(userId);

    //send response
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User no found!',
      },
    });
  }
};

const getUpdateUsers = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updatedUserData = req.body.user;

    const updatedUserResult = await UserServices.getUpdateUsersFromDB(
      userId,
      updatedUserData,
    );

    //send response
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: updatedUserResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User no found!',
      },
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const deleteResult = await UserServices.deleteUser(userId);

    //send response
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: deleteResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User no found!',
      },
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const orders = await UserServices.getAllOrders(userId);
    //send response
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User no found!',
      },
    });
  }
};

const addProductToOrder = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const { productName, price, quantity } = req.body;

    const result = await UserServices.addProductToOrder(
      userId,
      productName,
      price,
      quantity,
    );

    //send response
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User no found!',
      },
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
  getUpdateUsers,
  deleteUser,
  addProductToOrder,
  getAllOrders,
};
