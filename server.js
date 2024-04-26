import express from "express";
import "dotenv/config.js"
import { router } from "./routes/main-routes.js";
import connectToMongoDB from "./config/db.js";;

connectToMongoDB();

const port = process.env.SERVER_PORT || 5000;
export const app = express();
app.use(express.json());

app.use("/api",router);
export const server = app.listen(port,()=>console.log(`Server Connected to port :: ${port}`))