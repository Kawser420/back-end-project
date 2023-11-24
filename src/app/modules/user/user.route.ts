import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

//Endpoint: POST /api/users
router.post('/api/users', UserControllers.createUser);

export const UserRoutes = router;
