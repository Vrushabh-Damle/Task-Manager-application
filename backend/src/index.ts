import express from "express";
import cors from "cors";
import { taskRouter } from "./routes/task.js";
import { userRouter } from "./routes/users.js";
import { PORT } from "./config.js";
const app = express();
app.use(cors());
app.use("/api/v1/task", taskRouter);
app.use("/api/v1/user", userRouter);
app.use(express.json());
app.listen(PORT, () => {
  console.log("Serevr started on port no:", PORT);
});
