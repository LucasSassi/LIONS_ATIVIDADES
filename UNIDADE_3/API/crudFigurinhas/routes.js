import express from "express"

// FIGS

import { listFig } from "./modules/Figs/get.js";
import { createFig } from "./modules/Figs/post.js";
import { updateFig } from "./modules/Figs/put.js";
import { deleteFig } from "./modules/Figs/delete.js";

// USERS
import { createUser } from "./modules/Users/post.js";
import { listUser } from "./modules/Users/get.js";

export const router = express.Router();

// FIGS
router.get("/Figurinhas", listFig)
router.post("/Figurinhas", createFig)
router.put("/Figurinhas/:id", updateFig)
router.delete("/Figurinhas/:id", deleteFig)

// USERS
router.post("/Users", createUser)
router.get("/Users", listUser)

