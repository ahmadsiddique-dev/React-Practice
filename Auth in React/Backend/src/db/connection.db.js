import mongoose from 'mongoose'

async function DB_Connection() {
    try {
        const conInstance = await mongoose.connect(`${process.env.MONGODB_URI}/myauth`)
        // conInstance.connection.host;
    } catch (error) {
        console.log("DB Connection Failed :: ERROR :: ", error);
    }
}

export default DB_Connection;