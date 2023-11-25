import Joi from 'joi';
import { User } from './user.interface';

const orderValidationSchema = Joi.object({
  productName: Joi.string().required().label('Product name'),
  price: Joi.number().required().label('Price'),
  quantity: Joi.number().required().label('Quantity'),
});

const userValidationSchema = Joi.object<User>({
  userId: Joi.number().required().label('User Id is Required'),
  username: Joi.string().required().trim().label('Username is Required'),
  password: Joi.string().required().trim().label('Password is Required'),
  fullName: Joi.object({
    firstName: Joi.string().required().trim().label('First name is required'),
    lastName: Joi.string().required().trim().label('Last Name is Required'),
  }),
  age: Joi.number().required().label('Age is Required'),
  email: Joi.string().required().trim().label('Email is Required'),
  isActive: Joi.boolean().required().label('Is Active'),
  hobbies: Joi.array().items(Joi.string()).required().label('Hobbies'),
  address: Joi.object({
    street: Joi.string().required().trim().label('Street is Required'),
    city: Joi.string().required().trim().label('City is Required'),
    country: Joi.string().required().trim().label('Country is Required'),
  }),
  orders: Joi.array().items(orderValidationSchema).label('Orders is Required'),
});

export default userValidationSchema;
