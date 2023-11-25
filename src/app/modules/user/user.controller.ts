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
      message: 'User:id are retrieved successfully',
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
      message: 'Get a Single User Id are retrieved successfully',
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
};
