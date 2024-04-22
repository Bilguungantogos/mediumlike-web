import express, { Application, Request, Response } from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>MediumLike App</h1>");
});

app.listen(8080, () => {
  console.log("server is running");
});
