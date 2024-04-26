import { taskModel } from "../../models/task-model.js";
import request from "supertest";
import mongoose from "mongoose";
import "dotenv/config.js";
import { app ,server} from "../../server.js";

jest.mock("../../models/task-model.js", () => ({
  __esModule: true,
  taskModel: {
    create: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  },
}));

const data = {
  title: "Code",
  description: "description",
  status: "in progress",
  date: "25-04-2022",
};

describe("Integration Tests", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_DB_URL);
  });

  it("should add a new task", async () => {
    const taskData = data;
    const mockTask = { _id: "mockTaskId", ...taskData };
    taskModel.create.mockResolvedValueOnce(mockTask);
    const res = await request(app).post("/api/add").send(taskData);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Task successfully added." });
  });

  it("should get all tasks", async () => {
    const tasks = [data];
    taskModel.find.mockResolvedValueOnce(tasks);
    const res = await request(app).get("/api/get");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(tasks);
  });

  it("should get a single task", async () => {
    const taskId = "662b99c9e2e63423907ecdca";
    const task = data;
    taskModel.findById.mockResolvedValueOnce(task);
    const res = await request(app).get(`/api/get/${taskId}`);
    expect(res.status).toBe(200);
  });

  it("should update a task error", async () => {
    const taskId = "662bc23cf63853ea1717a796";
    const updatedTaskData = data;
    taskModel.findByIdAndUpdate.mockResolvedValueOnce();
    const res = await request(app).put(`/api/update/${taskId}`).send(updatedTaskData);
    expect(res.status).toBe(404);
  });

  it("should delete a task error", async () => {
    const taskId = "662bc23cf63853ea1717a796";
    taskModel.findByIdAndDelete.mockResolvedValueOnce();
    const res = await request(app).delete(`/api/delete/${taskId}`);
    expect(res.status).toBe(404);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

});
