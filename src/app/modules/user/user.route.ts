import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

//Endpoint: POST /api/users
router.post('/api/users', UserControllers.createUser);

//Endpoint: GET /api/users
router.get('/', UserControllers.getAllUsers);

//Endpoint: GET /api/users/:userId
router.get('/:userId', UserControllers.getSingleUsers);

//Endpoint: PUT /api/users/:userId
router.put('/api/users/:userId', UserControllers.getUpdateUsers);

//Endpoint: DELETE /api/users/:userId
router.delete('/api/users/:userId', UserControllers.deleteUser);

//Endpoint: PUT /api/users/:userId/orders
router.put('/api/users/:userId/orders', UserControllers.addProductToOrder);

// Endpoint: GET /api/users/:userId/orders
router.get('/api/users/:userId/orders', UserControllers.getAllOrders);

export const UserRoutes = router;
