import dotenv from "dotenv";
dotenv.config();
import mongoose, { model, Schema, Types } from "mongoose";
import { DB_URL } from "./config.js";
console.log(DB_URL);
if (DB_URL) {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("DB is connected succsesfully");
    })
    .catch((err) => {
      console.log("Error while db connection", err);
    });
} else {
  console.log("DB is not connected");
}

const taskSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const taskModel = model("Task", taskSchema);
