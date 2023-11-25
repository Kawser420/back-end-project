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

export const UserRoutes = router;
