import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  distance: {
    type: String,
    required: true
  },
  photo: {
    type: [String],
  },
  desc: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max:5
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})

const hotelSchema = mongoose.model('hotel', HotelSchema)

export default hotelSchema