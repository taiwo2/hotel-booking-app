import hotelSchema from "../models/hotel.js";
import roomSchema from "../models/room.js";
import { createError } from "../util/error.js";

export const createRoom = async (req,res,next) => {
  const HoteId= req.params.hoteId
  const newRoom = new roomSchema(req.body)

  try {
    const saveRoom = await newRoom.save();

    try {
      await hotelSchema.findByIdAndUpdate(HoteId, {$push: {rooms: saveRoom._id}})
    } catch (error) {
      next(error)
    }

    res.status(200).json(saveRoom)
  } catch (error) {
    next(error)
  }
}

export const updateRoom = async (req,res, next) => {
  
  try {
    const update = await roomSchema.findByIdAndUpdate(req.params.id,
      {$set: req.body},{new: true}
    )
    res.status(200).json(update)
  } catch (error) {
    next(error)
  }
}

export const deleteRoom = async (req,res, next ) => {
  const HoteId= req.params.hoteId

  try {
      await roomSchema.findByIdAndDelete(req.params.id)
     try {
      await hotelSchema.findByIdAndUpdate(HoteId,{$pull: {rooms: req.params.id}})
     } catch (error) {
      next(error)
     }
     res.status(200).json("room has been deleted")
  } catch (error) {
    next(error);
  }
}

export const getRoom = async (req, res, next) => {

  try {
    const room = await roomSchema.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
}

export const getAllRooms = async (req,res, next) => {

  try {
    const rooms = await roomSchema.find();
    res.status(200).json(rooms)
  } catch (error) {
    next(error)
  }
}

export const updateRoomAvailability = async (req,res, next) => {
  
  try {
    await roomSchema.updateOne(
      {"roomsNumbers._id": req.params.id},
      {$push: 
        {"roomsNumbers.$.unavailableDates": req.body.dates}
      }
      )
    res.status(200).json("Rooms is updated")
  } catch (error) {
    next(error)
  }
}