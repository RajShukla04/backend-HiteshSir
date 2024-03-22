import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDb();

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
