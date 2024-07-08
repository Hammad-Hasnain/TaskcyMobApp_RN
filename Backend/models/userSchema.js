import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    pass: {
        type: String,
        require: true
    },



})


const userModel = mongoose.model('user', userSchema)


export default userModel