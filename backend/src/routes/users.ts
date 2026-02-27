import express from "express";
import Router from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../db.js";
import { JWT_SECRET } from "../config.js";
import { z } from "zod";
export const userRouter = Router();
userRouter.use(express.json());
userRouter.post("/signup", async (req, res) => {
  try {
    const requiredBody = z.object({
      username: z.string(),
      password: z.string(),
    });

    const parsedData = requiredBody.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        message: "Invalid input format",
        error: parsedData.error,
      });
    }

    const { username, password } = parsedData.data;

    const existingUser = await userModel.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
      username,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while creating user",
    });
  }
});
userRouter.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(404).json({
        error: "User not found. Please signup first.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        error: "Wrong password",
      });
    }

    const token = jwt.sign({ userId: user._id.toString() }, JWT_SECRET);

    return res.status(200).json({
      token,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while signing in",
    });
  }
});
