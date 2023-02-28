import Dishes from "../models/Dishes.js";

export const addDishes = async (req, res) => {
  const dishes = new Dishes(req.body);
  const result = await dishes.save();
  res.send("dish added successfully");
};

export const getDishesofRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    let result = await Dishes.find({ restaurant_id: restaurantId });

    res.send(result);
  } catch (err) {
    res.send("something went wrong");
  }
};
