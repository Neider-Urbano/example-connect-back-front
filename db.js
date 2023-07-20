import mongoose from "mongoose";
import "dotenv/config";

// const uri =
//   `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.yuiduwe.mongodb.net/${process.env.NAME_DB_CLUSTER}?retryWrites=true&w=majority` ||
//   `mongodb://localhost:${process.env.PORT_COMPASS}/test`;
const uri = `mongodb+srv://vercel-admin-user:Eeps6qFdjkFXhRLo@cluster0.yuiduwe.mongodb.net/conect-front-back?retryWrites=true&w=majority`;
const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    return "Conección exitosa";
  } catch (error) {
    throw new Error(error);
  }
};
export default connectDb;
