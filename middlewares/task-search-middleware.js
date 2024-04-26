import { taskModel } from "../models/task-model.js";
import mongoose from "mongoose";

export async function taskSearchMiddleware(req, res, next) {
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return res.status(400).json({ error: "Task not found." });
  }

  const task = await taskModel.findById(taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }

  next();
}
