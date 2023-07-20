import mongoose from "mongoose";
const UserModel = mongoose.model("User", { name: String }, "users");

export default UserModel;
