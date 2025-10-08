import express from "express"
import { createProduct } from "./modules/createProduct.js";
import { addQuantity } from "./modules/addQuantity.js";
import { productList } from "./modules/ProductList.js";
import { decreaseQuantity } from "./modules/decreaseQuantity.js";
import { movmentList } from "./modules/MovmentList.js";

export const router = express.Router();
router.get("/Product", productList)
router.get("/Movments", movmentList)
router.post("/Product", createProduct)
router.post("/Product/:id/add", addQuantity);
router.post("/Product/:id/decrease", decreaseQuantity);