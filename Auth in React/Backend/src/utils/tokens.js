import jwt from 'jsonwebtoken'

export const createAccessToken = async (userId) => {
    return jwt.sign({
        _id : userId._id
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

export const createRefreshToken = async (userId) => {
    return jwt.sign({
        _id : userId._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

