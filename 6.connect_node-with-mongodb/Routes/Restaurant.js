import express from "express";
const router = express.Router();

import { createRestaurant, getRestaurants } from "../controllers/Restaurant.js";

router.post("/createRestaurant", createRestaurant);
router.get("/getRestaurants/:city_id", getRestaurants);
export default router;
