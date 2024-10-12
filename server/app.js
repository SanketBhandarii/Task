import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://3w-task.netlify.app"],
    credentials: true,
  })
);
app.set("trust proxy", true);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(helmet());

app.use("/api", userRoutes);

export {app};