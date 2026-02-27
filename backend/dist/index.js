import express from "express";
import cors from "cors";
import { taskRouter } from "./routes/task.js";
import { PORT } from "./config.js";
const app = express();
app.use(cors());
app.use("/api/v1/task", taskRouter);
app.use(express.json());
app.listen(PORT, () => {
    console.log("Serevr started on port no:", PORT);
});
//# sourceMappingURL=index.js.map