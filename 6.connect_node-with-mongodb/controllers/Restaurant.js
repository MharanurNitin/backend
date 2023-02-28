import Restaurant from "../models/Restaurant.js";

export const createRestaurant = async (req, res) => {
  let { name } = req.body;
  const RestorantExist = await Restaurant.findOne({ name: name });
  if (RestorantExist) return res.send("Restaurant already exists");
  try {
    const restaurant = new Restaurant(req.body);
    const result = await restaurant.save();
    res.send(result);
  } catch (err) {
    res.status(500).send("something went wrong please try again");
  }
};

// getRestaurantById

export const getRestaurants = async (req, res) => {
  const { city_id } = req.params;
  console.log(city_id);
  const result = await Restaurant.find({ city_id: city_id });
  console.log(result);
  if (result.length > 0) {
    return res.send(result);
  } else {
    res.status(404).send("No restaurants available");
  }
};
