import dotenv from "dotenv";
import connectDb from "./db/index.js";

import { app } from "./app.js";
dotenv.config({
  path: "./env",
});
connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("app is listning on port: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("mongoDB Connection failed", err);
  });

/*
import express from "express";
const app = express();
const ok = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error in express js", error);
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listning on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};

ok();


*/
