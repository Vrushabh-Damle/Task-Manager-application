import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
export function userAuth(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        res.json(401).json({
            Message: "You are not logged-in",
        });
        return;
    }
    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.userId = decodedData.userId;
        next();
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
}
//# sourceMappingURL=userAuth.js.map