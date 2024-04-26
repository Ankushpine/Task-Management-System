import { addNew , getAll, getTask , updateTask,deleteTask } from "../../controllers/main-controller.js";
import { taskModel } from "../../models/task-model.js";

jest.mock("../../models/task-model.js");

const data = {
    "title":"Code",
    "description" : "description",
    "status" : "in progress",
    "date":"25-04-2022"
}

describe('new addNew Controller Tests', () => {

    it('should add a new task', async () => {
      const req = { body: data };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await addNew(req, res);
  
      expect(taskModel.create).toHaveBeenCalledWith(req.body); 
      expect(res.status).toHaveBeenCalledWith(200); 
      expect(res.json).toHaveBeenCalledWith({ message: 'Task successfully added.' }); 
    });
  
    it('should handle errors', async () => {
      const req = { body: data };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const error = new Error('Test error');
  
      taskModel.create.mockRejectedValueOnce(error); 
  
      await addNew(req, res);
  
      expect(taskModel.create).toHaveBeenCalledWith(req.body); 
      expect(res.status).toHaveBeenCalledWith(500); 
      expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' }); 
    });
  });


  describe('getAll Controller Tests', () => {

    it('should get all tasks', async () => {
      const tasks = [data, data];
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      taskModel.find.mockResolvedValueOnce(tasks); 
  
      await getAll(req, res);
  
      expect(taskModel.find).toHaveBeenCalledWith({}); 
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(tasks);
    });
  
    it('should handle errors', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const error = new Error('Test error');
  
      taskModel.find.mockRejectedValueOnce(error);
  
      await getAll(req, res);
  
      expect(taskModel.find).toHaveBeenCalledWith({});
      expect(res.status).toHaveBeenCalledWith(500); 
      expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
    });
  });  


  describe('getTask Controller Tests', () => {

    it('should get a single task', async () => {
      const taskId = 'task123';
      const task = data;
      const req = { params: { taskId } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      taskModel.findById.mockResolvedValueOnce(task);
      await getTask(req, res);
  
      expect(taskModel.findById).toHaveBeenCalledWith(taskId); 
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(task); 
    });
  
    it('should handle errors', async () => {
      const taskId = 'task123';
      const req = { params: { taskId } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const error = new Error('Test error');
  
      taskModel.findById.mockRejectedValueOnce(error);
  
      await getTask(req, res);
  
      expect(taskModel.findById).toHaveBeenCalledWith(taskId); 
      expect(res.status).toHaveBeenCalledWith(500); 
      expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' }); 
    });
  });


  //Update Test
  describe('updateTask Controller Tests', () => {

    it('should update a task', async () => {
      const taskId = 'task123';
      const req = { params: { taskId }, body: data };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await updateTask(req, res);
  
      expect(taskModel.findByIdAndUpdate).toHaveBeenCalledWith(taskId, req.body); 
      expect(res.status).toHaveBeenCalledWith(200); 
      expect(res.json).toHaveBeenCalledWith({ message: 'Task successfully updated.' }); 
    });
  
    it('should handle errors', async () => {
      const taskId = 'task123';
      const req = { params: { taskId }, body: data };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const error = new Error('Test error');
  
      taskModel.findByIdAndUpdate.mockRejectedValueOnce(error); 
      await updateTask(req, res);
  
      expect(taskModel.findByIdAndUpdate).toHaveBeenCalledWith(taskId, req.body); 
      expect(res.status).toHaveBeenCalledWith(500); 
      expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' }); // Ensure response JSON is correct
    });
  });


// Delete Test
describe('deleteTask Controller Tests', () => {

    it('should delete a task', async () => {
      const taskId = 'task123';
      const req = { params: { taskId } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await deleteTask(req, res);
  
      expect(taskModel.findByIdAndDelete).toHaveBeenCalledWith(taskId);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Task successfully deleted.' });
    });
  
    it('should handle errors', async () => {
      const taskId = 'task123';
      const req = { params: { taskId } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const error = new Error('Test error');
  
      taskModel.findByIdAndDelete.mockRejectedValueOnce(error); 
  
      await deleteTask(req, res);
  
      expect(taskModel.findByIdAndDelete).toHaveBeenCalledWith(taskId); 
      expect(res.status).toHaveBeenCalledWith(500); 
      expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' }); 
    });
  });  