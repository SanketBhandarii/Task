import express from "express";
import multer from "multer";
import { storage } from "../helper/cloudinary.js";
import { User } from "../models/userModel.js";
import { getAllUsers, imageUpload } from "../controllers/userController.js";

const router = express.Router();
const upload = multer({ storage });

router.post("/upload", upload.single("file"), imageUpload);
router.get("/getusers", getAllUsers);

export default router;
