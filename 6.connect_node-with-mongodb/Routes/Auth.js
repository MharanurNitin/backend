import express from "express";
const router = express.Router();
import {
  SignupController,
  LoginController,
  getData,
} from "../controllers/User.controller.js";
router.post("/signup", SignupController);
router.post("/login", LoginController);
router.get("/info", getData);
export default router;
