import hotelSchema from "../models/hotel.js";
import roomSchema from "../models/room.js";
import { createError } from "../util/error.js";

export const createHotel = async (req,res) => {
  // const hotel = req.body
   const newHotel = new hotelSchema(req.body)
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const updatesHotel = async (req,res) => {
  try {
    const updateHotel = await hotelSchema.findByIdAndUpdate(
      req.params.id,
      {$set: req.body}, {new: true})
    res.status(200).json(updateHotel)
  } catch (error) {
    res.status(404).json(error)
  }
}

export const deleteHotel = async (req,res) => {
  try {
    const updateHotel = await hotelSchema.findByIdAndDelete(req.params.id)
    res.status(200).json(updateHotel)
  } catch (error) {
    res.status(404).json(error)
  }
}

export const getHotel = async (req,res) => {
  try {
    const hotel = await hotelSchema.findById(req.params.id)
    res.status(200).json(hotel)
  } catch (error) {
    res.status(404).json(error)
  }
}

export const getAllHotels = async (req,res,next) => {
  const {min,max, other} = req.query
  try {
    const hotels = await hotelSchema.find({
      ...other,
      cheapestPrice: {$gt: min | 1, $lt: max || 999}
    }).limit(req.query.limit)
    res.status(200).json(hotels)
  } catch (error) {
    next(error)
  }
}

export const countByCity = async (req,res,next) => {
  const cities= req.query.cities.split(",")

  try {
    const list = await Promise.all(cities.map((city) => {
      return hotelSchema.countDocuments({city: city})
    }))
    res.status(200).json(list)
  } catch (error) {
    next(error)
  }
}

export const countByType = async (req,res,next) => {

  try {
    const hotelCount = await hotelSchema.countDocuments({type: "hotel"});
    const apartmentCount = await hotelSchema.countDocuments({type: "apartment"});
    const resortCount = await hotelSchema.countDocuments({type: "resort"});
    const villaCount = await hotelSchema.countDocuments({type: "villa"});
    const cabinCount = await hotelSchema.countDocuments({type: "cabin"});
    res.status(200).json([
      {type: "hotel", count: hotelCount},
      {type: "apartments", count: apartmentCount},
      {type: "resorts", count: resortCount},
      {type: "villas", count: villaCount},
      {type: "cabins", count: cabinCount}
    ])
  } catch (error) {
    next(error)
  }
}

export const getHotelRooms = async (req,res,next) => {
  try {
    const hotel = await hotelSchema.findById(req.params.id);

    const list= await Promise.all(
      hotel.rooms.map((room) => {
      return roomSchema.findById(room)
    }))

    res.status(200).json(list)
  } catch (error) {
    next(createError(404,"no room available"))
  }
}