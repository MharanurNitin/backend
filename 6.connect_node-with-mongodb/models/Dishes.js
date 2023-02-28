import mongoose from "mongoose";

const DishesSchema = new mongoose.Schema({
  restaurant_id: { type: String, required: true, ref: "restaurants" },
  dish_name: { type: String, required: true },
  price: { type: String, required: true },
  votes: { type: String, required: true },
  ratings: { type: String, required: true },
  description: { type: String },
  image: { type: String },
});

export default mongoose.model("dishes", DishesSchema);
