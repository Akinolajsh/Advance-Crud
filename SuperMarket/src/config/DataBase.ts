import mongoose from "mongoose"

const mongodb= "mongodb://0.0.0.0:27017/warehouse"

export const Database= async()=>{
   try {
    const db= await mongoose.connect(mongodb)
    console.log(`Connecting to ${db.connection.host}`)
   } catch (error) {
    console.log("Failed to connect")
   }
}