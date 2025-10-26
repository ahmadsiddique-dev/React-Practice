import mongoose from "mongoose";
import { AuthModel } from "../models/login.model.js";
import bcrypt from "bcrypt"


const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!(email && password)) return res.send({warning : "Missing email or password"})

        const user = await AuthModel.findOne({email: email})

        const response = await user.isPasswordCorrect(password)
        
        res.send({
            status : "ok",
        })

    } catch (error) {
        res.send({warning : "User Not found"})
    }
};
const signup = async(req, res) => {
    try {
        const { username, email, password } = req.body;
        AuthModel.create({
            username: username,
            email : email,
            password : password
        })

        res.send({
            status : "User Created Successfully."
        })
    } catch (error) {
        return res.send({
            status : "Failed",
            error
        })
    }
}

export {login, signup}