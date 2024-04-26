import express from "express";
import { inputValidationMiddleware } from "../middlewares/input-validation-middleware.js";
import { taskSearchMiddleware } from "../middlewares/task-search-middleware.js";
import { addNew, getAll , deleteTask, updateTask, getTask } from "../controllers/main-controller.js";
const router = express.Router();

router.post("/add",[inputValidationMiddleware],addNew);
router.get("/get",getAll);
router.get("/get/:taskId",[taskSearchMiddleware],getTask);
router.put("/update/:taskId",[inputValidationMiddleware,taskSearchMiddleware],updateTask);
router.delete("/delete/:taskId",[taskSearchMiddleware],deleteTask);

export {router};