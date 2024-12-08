import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import { time } from "console";
const port = process.env.PORT || 3000;
connectDB();

const app = express();

app.get("/", async (req, res) => {
  let entry = {
    name: "John Doe",
    sign_image: "zdfjh.jpg",
    time: new Date(),
  };

  const insertData = await attendee.insertOne(entry);

  res.send(insertData);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
