import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  user_id: { type: String, required: true, ref: "users" },
  dish_name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  dish_id: { type: String, required: true },
});

export default mongoose.model("carts", CartSchema);
