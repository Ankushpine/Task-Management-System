# Task Management System

A robust task management system built with Express.js and MongoDB for <b>Convivity Technology</b>. Features include seamless task handling and comprehensive API documentation. Rigorous testing using Jest ensures code reliability. Easy setup and scalability make it ideal for various project requirements.
### 🌐 Hosted Link : [Link](https://pine-task-management-system.onrender.com)
### 🌐 Postman collection link : [Link](https://www.postman.com/ankush-pine/workspace/task-management/collection/28535484-bb0fe2c6-5c96-4a8c-b7d2-3bf7c3e39d67)
## 🚀Features
- <b>Task Management:</b> Efficiently manage tasks with functionalities for creation, updating, and deletion.
- <b>API Documentation:</b> Comprehensive documentation for easy integration and usage.
- <b>Unit & Integration Testing:</b> Rigorous testing suite implemented using Jest for maintaining code quality and reliability.
- <b>MongoDB Integration:</b> Leveraging MongoDB for scalable and flexible data storage solutions.
- <b>Express.js Framework:</b> Utilizing Express.js for rapid development and enhanced performance.

## 🛠 Technologies Used
- <b>Express.js:</b> Fast, unopinionated, minimalist web framework for Node.js.
- <b>MongoDB:</b> NoSQL database for scalable, high-performance applications.
- <b>Jest:</b> Delightful JavaScript Testing Framework with a focus on simplicity.
- <b>Supertest:</b> Super-agent driven library for testing HTTP servers.

## ⚙ API Endpoints 

| Method   | URL                                      | Description                            |
| -------- | ---------------------------------------- | ---------------------------------------|
| `POST`   | `/api/add`                               | Add new task.                          |
| `GET`    | `/api/get`                               | Retrieve all tasks.                    |
| `GET`    | `/api/get/:taskID`                       | Retrieve a single task by its ID.      |
| `PUT`    | `/api/update/:taskID`                    | Update a task by its ID.               |
| `DELETE` | `/api/delete/:taskID`                    | Delete a task by its ID.               |

## 📖 API Documentation

### 🔶 Add new task : `POST  /api/add`

📩 Request <br/>
Inputs - 
- Title: (string) The title of the task.
- Description: (string) Description of the task.
- Status: (string) The status of the task. Must be one of: "Pending", "In Progress", or "Completed".
- Date: (string) Date of the task in the format "dd-mm-yyyy".
- Every field is required.

The Req.body contains sample data.

```javascript
{
  "title": "Sample Task",
  "description": "This is a sample task description.",
  "status": "In Progress",
  "date": "27-04-2024"
}
```
💬Response <br/>
If all fields are present with valid inputs, the response is generated.
```javascript
{
"message": "Task successfully added."
}
```

If not, an appropriate response is provided.
```javascript
{
 "error": The reason for the error...
}
```

### 🔶 Retrieve all tasks : `GET  /api/get`
💬Response <br/>
Sample response
```javascript
[
    {
      "_id": "662beb50468dd3b438653abd",
      "title": "Sample Task1",
      "description": "This is a sample task description.",
      "status": "In Progress",
      "date": "27-04-2024"
    },
    {
      "_id": "662beb50468dd3b438653abd",
      "title": "Sample Task2",
      "description": "This is a sample task description.",
      "status": "In Progress",
      "date": "27-04-2024"
    }  
]
```

### 🔶 Retrieve a single task by its ID : `GET  /api/get/:taskID`
📩Request <br/>
Provide parameter to the API, for example:
```
 /api/get/662beb50468dd3b438653abd
```
💬Response <br/>
If all fields are present with valid inputs, the response is generated.</br>
Sample response
```javascript
    {
      "_id": "662beb50468dd3b438653abd",
      "title": "Sample Task1",
      "description": "This is a sample task description.",
      "status": "In Progress",
      "date": "27-04-2024"
    }
```


### 🔶 Update a task by its ID : `PUT  /api/update/:taskID`
📩 Request <br/>
Provide parameter to the API, for example:
```
  /api/update/662beb50468dd3b438653abd
```

The Req.body contains sample data.
```javascript
{
  "title": "Update Sample Task",
  "description": "This is a sample task description.",
  "status": "In Progress",
  "date": "27-04-2024"
}
```
💬Response <br/>
If all fields are present with valid inputs, the response is generated.
```javascript
{
    "message": "Task successfully updated."
}
```


### 🔶 Delete a task by its ID : `DELETE  /api/delete/:taskID`
📩 Request <br/>
Provide parameter to the API, for example:
```
  /api/delete/662beb50468dd3b438653abd
```
💬Response <br/>
If all fields are present with valid inputs, the response is generated.
```javascript
{
    "message": "Task successfully deleted."
}
```
## 💻 How to setup the project on local system
- Clone the repository.
- Install dependencies using `npm i`.
- Set up environment variables, MongoDB URL and PORT.
- Run the application using `npm start`.
- For unit test use `npm run test:Unit`.
- For integration test use `npm run test:Integration`.




