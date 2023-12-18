import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// Create POST
router.post('/', UserControllers.createUser);

// GET All Users
router.get('/', UserControllers.getAllUsers);

// GET specific /:userId
router.get('/:userId', UserControllers.getSingleUsers);

// PUT /:userId
router.put('/:userId', UserControllers.getUpdateUsers);

// DELETE /:userId
router.delete('/:userId', UserControllers.deleteUser);

export const UserRoutes = router;
