import express from "express";
import {
  citiesController,
  getCities,
  getCityId,
} from "../controllers/Cities.js";
const router = express.Router();

router.post("/addCity", citiesController);
router.get("/getCities", getCities);
router.get("/:city/getCityId", getCityId);
export default router;
