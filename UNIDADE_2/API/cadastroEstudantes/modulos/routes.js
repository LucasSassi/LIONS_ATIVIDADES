import express from "express"
import { listar } from "./listar.js";
import { editar } from "./editar.js";
import { deletar } from "./deletar.js";
import { adicionar } from "./adicionar.js";

export const router = express.Router()
router.get("/estudantes/listar", listar);
router.put("/estudantes/editar/:matricula", editar);
router.delete("/estudantes/deletar/:matricula", deletar);
router.post("/estudantes/adicionar", adicionar);

