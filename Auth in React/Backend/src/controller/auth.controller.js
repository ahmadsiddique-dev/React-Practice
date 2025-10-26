import mongoose from "mongoose";
import { AuthModel } from "../models/login.model";


const login = async (req, res) => {

    try {
        const { email, password } = req.body; 
        
        if (email && password) {
            console.log("Data : ", email, password);
            return res.send({
                status : "ok",
                email,
                password
            })
        }

    } catch (error) {
        console.log("Auth Error :: Login Failed :: ", error)
        return {
            status : "Failed",
            error
        }
    }
}

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