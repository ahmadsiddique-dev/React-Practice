import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
    },
    password : {
        type : String,
        required: true,
    },
    refreshToken : {
        type : String,
        require : true
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

authSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
            _id : this._id,
        email : this.email,
        username : this.username,
        password : this.password
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

authSchema.methods.generateRefreshToken = function () {
    jwt.sign(
        {
        _id : this._id,
        email : this.email,
        username : this.username,
        password : this.password
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const AuthModel = mongoose.model("Auth", authSchema)