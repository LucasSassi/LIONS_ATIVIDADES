import express from "express"
import { addUser } from "./modules/addUser.js";
import { authMiddleware, Role } from "./modules/authMiddleware.js";
import { HelloUser } from "./modules/getUser.js";
import { loginUser } from "./modules/loginUser.js";


export const router = express.Router();
router.post("/User/Create", addUser)
router.post("/User/Login", loginUser)
router.get("/User/Profile", authMiddleware(Role.ADMIN), HelloUser)