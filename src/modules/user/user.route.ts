import express from 'express'
import { UserController } from './user.controller';
const router = express.Router();

router.get('/:id', UserController.getSingleUser)
router.get('/', UserController.getUsers)
router.post('/create-user', UserController.addUser)
router.post('/profile', UserController.insertOrUpdateProfile)

export const UserRoutes = router
