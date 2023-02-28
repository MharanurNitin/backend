import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
  name: { type: "string", required: "true", trim: "true" },
});
export default mongoose.model("cities", CitySchema);
