import express from "express"
import { createPet } from "./modules/post.js";
import { updatePet } from "./modules/put.js";
import { listPet } from "./modules/get.js";
import { deletePet } from "./modules/delete.js";

export const router = express.Router();
router.post("/Pets", createPet)
router.put("/Pets/:id", updatePet)
router.get("/Pets", listPet)
router.delete("/Pets/:id", deletePet)