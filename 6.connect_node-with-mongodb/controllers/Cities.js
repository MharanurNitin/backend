import Cities from "../models/Cities.js";

export const citiesController = async (req, res) => {
  const { name } = req.body;
  let cityExist = await Cities.findOne({ name });

  if (cityExist) {
    res.send({ message: "city Already exists" });
    return;
  }
  const city = new Cities({ name });
  const result = await city.save();
  res.send(result);
};

export const getCities = async (req, res) => {
  let cities = await Cities.find({});
  res.send(cities);
};

export const getCityId = async (req, res) => {
  const { city } = req.params;
  try {
    const result = await Cities.findOne({ name: city });
    // console.log(result);
    res.send(result._id);
  } catch (err) {
    res.send([{ name: "not found" }]);
  }
};
