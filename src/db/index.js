import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB=async()=>{
    try{
      const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`MongoDB connected successfully to ${DB_NAME} and the instance are ${connectionInstance.connection.host} `)
    }catch(error){
        console.error(`Error connecting to MongoDB: ${error.message}`)
        process.exit(1)

    }

}

export default connectDB;