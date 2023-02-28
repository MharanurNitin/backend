import express from "express";
const router = express.Router();
import { AddToCart, showCart } from "../controllers/Cart.js";
router.post("/AddToCart", AddToCart);
router.get("/showCart/:user_id", showCart);

export default router;
