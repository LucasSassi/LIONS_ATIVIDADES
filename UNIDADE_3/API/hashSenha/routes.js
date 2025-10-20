import express from "express"
import { addUser } from "./modules/addUser.js";
import { authMiddleware } from "./modules/authMiddleware.js";
import { HelloUser } from "./modules/getUser.js";


export const router = express.Router();
router.post("/User/Create", addUser)
router.post("/User/Login", authMiddleware, HelloUser)