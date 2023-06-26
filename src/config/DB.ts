import mongoose from "mongoose";

const Mongodb_URL = "mongodb://0.0.0.0:27017/set07BE";

async function dbConfig() {
  try {
    const conn = await mongoose.connect(Mongodb_URL);
    console.log(`Db connected to ${conn.connection.host}`);
  } catch (error: any) {
    console.log(error);
  }
}

export default dbConfig;
