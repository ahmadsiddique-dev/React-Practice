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
        unique : true
    },
    password : {
        type : String,
        required: true,
    }
}, { timestamps : true })

authSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)

    next();
})

authSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

export const AuthModel = mongoose.model("Auth", authSchema)
 