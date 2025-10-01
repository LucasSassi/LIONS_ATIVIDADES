import express from "express"
import { createProduct } from "./modules/createProduct.js";
// import { addQuantity } from "./modules/addQuantity.js";

export const router = express.Router();
router.post("/Product", createProduct)
// router.post('/Product/:id/add', addQuantity);