import { createAccessToken } from "../utils/tokens.js";
import jwt from 'jsonwebtoken'

export const homeURL = "";
export const verifyRefreshToken = async (req, res, next) => {
    
    if (req.tokenStatus === "missing" || req.tokenStatus === "expired") {

        const token = req.headers?.cookie.trim().split("=")[1] 

        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({ message : "Unauthorized"})
            }
            else {
                createAccessToken(req.user?._id)
            }
        })
    }
    else if (req.tokenStatus === "valid") next();

    res.status(400).json({ message : "Bad Request."})
    
}