import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB");
  });

const app = express();
app.listen(3000, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 3000");
  }
});
