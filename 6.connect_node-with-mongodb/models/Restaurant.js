import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  city_id: {
    type: String,
    ref: "cities",
  },
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  images: [{ type: String, required: true, trim: true }],
  food: { type: Array, required: true, trim: true },
  rating: { type: Number, required: true, trim: true },
  contact: { type: String },
  state: { type: String, required: true, trim: true },
});

export default mongoose.model("restaurants", RestaurantSchema);
