import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true
  },
  roomsNumbers: [{number: Number, unavailableDates: {type: [Date]}}],
},{timestamps: true})

const roomSchema = mongoose.model('room', RoomSchema)

export default roomSchema