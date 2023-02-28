import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
});

export default mongoose.model("users", userSchema);
