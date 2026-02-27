import express from "express";
import Router from "express";
import { userModel } from "../db.js";
export const userRouter = Router();
userRouter.use(express.json());
userRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(404).json({
      Error: `please add all the credentials, that all are neccsesarry`,
    });
    return;
  }
  try {
    const user = await userModel.create({
      username: username,
      password: password,
    });
    if (!user) {
      res.status(404).json({ message: "User creation failed" });
    }
    res.status(200).json("token");
  } catch (err) {
    console.log("Error while creating user", err);
  }
});
userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(404).json({ message: "All credentails are neccesarry" });
    return;
  }

  const existingUser = await userModel.findOne({
    username,
  });
  if (existingUser) {
    res.status(411).json({ Message: "User allready exists" });
    return;
  }
});
