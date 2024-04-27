import { taskModel } from "../models/task-model.js";

// Add new task
export const addNew = async (req, res) => {
  try {
    await taskModel.create(req.body);
    return res.status(200).json({ message: "Task successfully added." });
  } catch (error) {
    console.log("Error in addNew Controller :: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all tasks
export const getAll = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    console.log(tasks);
    if(tasks.length==0){
      return res.status(200).json({ message: "There are no tasks." });
    }
    return res.status(200).json(tasks);
  } catch (error) {
    console.log("Error in getAll Controller :: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get single task
export const getTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await taskModel.findById(taskId);
    return res.status(200).json(task);
  } catch (error) {
    console.log("Error in getTask Controller :: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update task
export const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    await taskModel.findByIdAndUpdate(taskId, req.body);
    return res.status(200).json({ message: "Task successfully updated." });
  } catch (error) {
    console.log("Error in updateTask Controller :: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    await taskModel.findByIdAndDelete(taskId);
    return res.status(200).json({ message: "Task successfully deleted." });
  } catch (error) {
    console.log("Error in deleteTask Controller :: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
