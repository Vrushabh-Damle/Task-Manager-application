import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
import type { Request, Response, NextFunction } from "express";
import type { IGetUserAuthInfoRequest } from "../types/express/index.js";
interface MyJwtPayload {
  userId: string;
}
export function userAuth(
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers["authorization"];
  if (!token) {
    res.json(401).json({
      Message: "You are not logged-in",
    });
    return;
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRET) as MyJwtPayload;
    req.userId = decodedData.userId;
    next();
  } catch (error) {
    res.status(404).json({ error: error });
  }
}
