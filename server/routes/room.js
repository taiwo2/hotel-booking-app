import express from 'express';
import { createRoom, deleteRoom, getRoom, getAllRooms, updateRoom, updateRoomAvailability } from '../controller/room.js';
import { verifyAdmin } from '../util/verify.js';

const router = express.Router();


router.post("/:hoteId",verifyAdmin, createRoom) // post rooms
router.put('/:id',verifyAdmin, updateRoom) // Updates room
router.put('/availability/:id', updateRoomAvailability) // Updates room Availability

router.delete('/:id/:hoteId',verifyAdmin, deleteRoom) // delete room
router.get('/:id', getRoom) // get room
router.get('/', getAllRooms) //get all rooms

export default router