import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

//
const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    // create validation using zod
    const zodParsedData = userValidationSchema.parse(userData);

    const result = await UserServices.createUserInToDB(zodParsedData);

    //send response
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
//

//
const getAllUsers = async (req: Request, res: Response) => {
  try {
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
    //send response
    if (allUsers) {
      res.status(200).json({
        success: true,
        message: 'Users fetched successfully!',
        data: allUsers,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
//

//
const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.userId, 10);
    const result = await UserServices.getSingleUsersFromDB(userId);

    //send response
    if (result) {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    }
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
//

//
const getUpdateUsers = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.userId, 10);
    const updatedUserData = req.body.user;

    const updatedUserResult = await UserServices.getUpdateUsersFromDB(
      userId,
      updatedUserData,
    );

    //send response
    if (updatedUserResult) {
      res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: updatedUserResult,
      });
    }
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
//

//
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.userId);

    const deleteResult = await UserServices.deleteUserFromDB(userId);

    //send response
    if (deleteResult) {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      });
    }
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
//

//
const productOrder = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.userId, 10);
    const orderData = req.body;

    await UserServices.addProductToOrder(userId, orderData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
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
//

//
const allOrders = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.userId, 10);
    const result = await UserServices.getAllOrders(userId);

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: { orders: result },
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
//

//
const totalPrice = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.userId, 10);
    const result = await UserServices.getTotalPrice(userId);

    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: { totalPrice: result },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User price not found',
      error: {
        code: 404,
        description: 'User price no found!',
      },
    });
  }
};
//

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
  getUpdateUsers,
  deleteUser,
  productOrder,
  allOrders,
  totalPrice,
};
