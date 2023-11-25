import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

//Endpoint: POST /api/users
router.post('/api/users', UserControllers.createUser);

//Endpoint: GET /api/users
router.get('/', UserControllers.getAllUsers);

//Endpoint: GET /api/users/:userId
router.get('/:userId', UserControllers.getSingleUsers);

export const UserRoutes = router;