import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// Create POST
router.post('/', UserControllers.createUser);

// GET All Users
router.get('/', UserControllers.getAllUsers);

//Endpoint: GET specific /:userId
router.get('/:userId', UserControllers.getSingleUsers);

//Endpoint: PUT /:userId
router.put('/:userId', UserControllers.getUpdateUsers);

//Endpoint: DELETE /:userId
router.delete('/:userId', UserControllers.deleteUser);

// //Orders PUT /:userId/orders
// router.put('/:userId/orders', UserControllers.orderToUser);

// // Endpoint: GET /:userId/orders
// router.get('/:userId/orders', UserControllers.getAllOrders);

// //Endpoint: GET /api/users/:userId/orders
// router.get('/:userId/orders/total-price', UserControllers.calculateTotalPrice);

export const UserRoutes = router;
