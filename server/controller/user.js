import userSchema from "../models/auth.js";
import { createError } from "../util/error.js";

export const updatesUser = async (req,res) => {
  try {
    const updateUser = await userSchema.findByIdAndUpdate(
      req.params.id,
      {$set: req.body}, {new: true})
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(404).json(error)
  }
}

export const deleteUser = async (req,res) => {
  try {
    const updateUser = await userSchema.findByIdAndDelete(req.params.id)
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(404).json(error)
  }
}

export const getUser = async (req,res) => {
  try {
    const user = await userSchema.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json(error)
  }
}

export const getAllUsers = async (req,res,next) => {
  // let failed = true;
  // if (failed) return next(createError(401, "you are not Authenticated"))
  try {
    const user = await userSchema.find()
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}