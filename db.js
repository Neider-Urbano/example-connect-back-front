import mongoose from "mongoose";
import "dotenv/config";
const uri_atlas = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.yuiduwe.mongodb.net/${process.env.NAME_DB_CLUSTER}?retryWrites=true&w=majority`;
const uri_compass = `mongodb://localhost:${process.env.PORT_COMPASS}/test`;
const uri = uri_atlas || uri_compass;
const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    return "Conección exitosa";
  } catch (error) {
    throw new Error(error);
  }
};
export default connectDb;
