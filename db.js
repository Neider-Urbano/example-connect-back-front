import mongoose from "mongoose";
import "dotenv/config";

// const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.yuiduwe.mongodb.net/${process.env.NAME_DB_CLUSTER}?retryWrites=true&w=majority`;
const uri = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    return "Conección exitosa";
  } catch (error) {
    throw new Error(error);
  }
};
export default connectDb;
