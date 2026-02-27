import express from "express";
import Router from "express";
import { taskModel } from "../db.js";
export const taskRouter = Router();
taskRouter.use(express.json());
taskRouter.get("/getAllTheTasks", async (req, res) => {
  try {
    const allTheTasks = await taskModel.find({});
    if (!allTheTasks) {
      res
        .status(400)
        .json({ message: "error while fetching tasks from the db" });
      return;
    }
    res.status(200).json({ tasks: allTheTasks });
  } catch (error: any) {
    console.log("Error occured", error);
  }
});
taskRouter.post("/createNewTask", async (req, res) => {
  const { title, completed } = req.body;
  try {
    const createdTask = await taskModel.create({
      title: title,
      completed: completed,
    });
    if (!createdTask) {
      res.status(404).json({ message: "Tasks are not created" });
      return;
    }
    res.status(200).json({ createdTask: createdTask });
  } catch (error: any) {
    console.log("Error ocured while creating task", error);
  }
});

taskRouter.put("/updateTask/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updated = await taskModel.findByIdAndUpdate(id, {
      title: title,
      completed: completed,
    });
    if (!updated) {
      res.status(404).json({ message: "Document not updated" });
    }
    res.status(200).json({ message: "Your document is updated " });
  } catch (err) {
    console.log("Error while updating document", err);
  }
});
taskRouter.delete("/deleteTask/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await taskModel.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "Document is failed to delete" });
    }
    res.status(200).json({ message: "Your document is deleted" });
  } catch (err) {
    console.log("Error while deletin document", err);
  }
});
