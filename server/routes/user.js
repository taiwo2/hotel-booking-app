import express from 'express';
import { deleteUser, getAllUsers, getUser, updatesUser } from '../controller/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../util/verify.js';

const router = express.Router();

router.put('/:id',verifyUser, updatesUser) // Updates users
router.delete('/:id',verifyUser, deleteUser) // delete users
router.get('/:id', verifyUser, getUser) // get users
router.get('/',verifyAdmin, getAllUsers) //get all users

export default router