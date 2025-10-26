import mongoose from "mongoose";
import bcrypt from "bcrypt"

const authSchema = new mongoose.Schema({
    username : {
        type : String,
        required: true,
        unique : true,
        lowercase : true
    },
    email : {
        type : String,
        required: true,
        lowercase : true
    },
    password : {
        type : String,
        required: true,
        lowercase : true
    }
}, { timestamps : true })

authSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)

    next();
})


export const AuthModel = mongoose.model("Auth", authSchema)