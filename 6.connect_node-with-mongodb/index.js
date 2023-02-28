import express from "express";
import cors from "cors";
import "./db.config.js";

import mainRouter from "./Routes/index.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", mainRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
