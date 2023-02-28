import express from "express";
const router = express.Router();
import { addDishes, getDishesofRestaurant } from "../controllers/Dishes.js";
router.post("/addDishes", addDishes);
router.get("/getDishesofRestaurant/:restaurantId", getDishesofRestaurant);
export default router;
