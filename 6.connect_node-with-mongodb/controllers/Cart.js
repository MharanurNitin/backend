import Cart from "../models/Cart.js";

export const AddToCart = async (req, res) => {
  const { user_id, dish_name, image, price } = req.body;
  try {
    const cart = new Cart(req.body);
    const result = await cart.save();
    res.send(result);
  } catch (err) {
    res.send("something went wrong");
  }
};

export const showCart = async (req, res) => {
  try {
    const { user_id } = req.params;

    const isDishesAdded = await Cart.find({ user_id: user_id });
    if (isDishesAdded.length > 0) {
      return res.status(200).send(isDishesAdded);
    } else {
      res.send("cart is empty");
    }
  } catch (err) {
    res.send("server problem");
  }
};
