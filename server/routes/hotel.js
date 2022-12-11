import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getHotel, updatesHotel, countByCity, countByType, getHotelRooms } from '../controller/hotel.js';
import { verifyAdmin } from '../util/verify.js';

const router = express.Router();

router.post("/",verifyAdmin, createHotel) // post hotels
router.put('/:id',verifyAdmin, updatesHotel) // Updates hotel
router.delete('/:id',verifyAdmin, deleteHotel) // delete hotel
router.get('/find/:id', getHotel) // get hotels
router.get('/', getAllHotels) //get all hotel
router.get('/countbycity', countByCity) //count all cities
router.get('/countbytype', countByType) //count by Type
router.get('/rooms/:id', getHotelRooms) //hotel rooms
export default router