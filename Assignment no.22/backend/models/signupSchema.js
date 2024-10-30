import mongoose from "mongoose";

const signupSchema = mongoose.Schema({
    fullName : String,
    email : String,
    password : String,
})

const signupModel  = mongoose.model('usersAccountData',signupSchema)

export default signupModel