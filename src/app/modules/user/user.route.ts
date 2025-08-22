import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getSingleUsers);
router.put('/:userId', UserControllers.getUpdateUsers);
router.delete('/:userId', UserControllers.deleteUser);
router.put('/:userId/orders', UserControllers.addProductOrder);
router.get('/:userId/orders', UserControllers.allOrders);
router.get('/:userId/orders/total-price', UserControllers.totalPrice);

export const UserRoutes = router;
