import express from "express"
import { adicionarBaralho } from "./Baralho/createBaralho.js";
import { listarBaralhos } from "./Baralho/listarBaralhos.js";
import { atualizarBaralho } from "./Baralho/atualizarBaralho.js";

export const router = express.Router();
// BARALHOS
router.post("/baralhos", adicionarBaralho)
router.get("/baralhos", listarBaralhos)
router.put("/baralhos/:idBaralho", atualizarBaralho)