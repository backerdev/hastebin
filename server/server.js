import app from "./index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongooseClient = mongoose.connect(
  process.env.URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      app.listen(process.env.PORT);
      console.log("server and mongodb connection done");
    } else {
      console.log("server and mongodb connection error: " + err);
      process.exit(1);
    }
  }
);
