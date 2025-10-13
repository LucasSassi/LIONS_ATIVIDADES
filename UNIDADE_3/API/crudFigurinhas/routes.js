import express from "express"
import { listFig } from "./modules/get.js";
import { createFig } from "./modules/post.js";
import { updateFig } from "./modules/put.js";
import { deleteFig } from "./modules/delete.js";

export const router = express.Router();
router.get("/Figurinhas", listFig)
router.post("/Figurinhas", createFig)
router.put("/Figurinhas/:id", updateFig)
router.delete("/Figurinhas/:id", deleteFig)