import bcrypt from 'bcryptjs'
import  jwt  from 'jsonwebtoken';
import userSchema from "../models/auth.js"
import { createError } from '../util/error.js';

export const register = async (req,res,next) => {

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new userSchema({
      ...req.body,
      password: hash
    })
    await newUser.save()
    res.status(201).send("userCreated")
  } catch (error) {
    next(error)
  }
}


export const login = async (req,res,next) => {

  try {
   const user = await userSchema.findOne({username: req.body.username})
   if (!user) return next(createError(404,"users those not exit"))

   const ispasswordCorrect = await bcrypt.compare(req.body.password, user.password)

   if (!ispasswordCorrect) return next(createError(400,"wrong password or username"))

   const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT,)
   const {username, isAdmin, others} = user._doc;
   console.log(user._doc)
  const tokens = req.cookies.access_token
   console.log('www',tokens)
   res.cookie("access_token",token,{
    httpOnly: true
   }).status(200).json(user)
  } catch (error) {
    next(error)
  }
}