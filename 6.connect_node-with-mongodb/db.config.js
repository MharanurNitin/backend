import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/zomato_clone";
mongoose.set("strictQuery", false);
mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Mongodb is connnected"))
  .catch((err) => console.log(err));
