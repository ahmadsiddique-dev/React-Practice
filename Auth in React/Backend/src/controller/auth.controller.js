import mongoose from "mongoose";


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

        if ( username && email && password ) {
            return res.send(
                {
                    status : "Ok",
                    username,
                    email,
                    password
                }
            )
        }
    } catch (error) {
        return res.send({
            status : "Failed",
            error
        })
    }
}

export {login, signup}