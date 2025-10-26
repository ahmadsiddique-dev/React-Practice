import mongoose from "mongoose";

const DB_Connection = async() =>  {
    try {
        const conInstance = await mongoose.connect(`${process.env.MONGODB_URI}/auth`)
        console.log("HOSTNAME : ", conInstance.connection.host)
    } catch (error) {
        console.log("DB_Connecting Error :: ", error)
    }
}

export default DB_Connection;