import express from "express"
import { adicionarProduto } from "./modulos/adicionar.js";
import { listarProdutos } from "./modulos/listar.js";
import { deletarProdutos } from "./modulos/deletar.js";

export const router = express.Router();
router.post("/produtos", adicionarProduto);
router.get("/produtos", listarProdutos);
router.delete("/produtos/:id", deletarProdutos);