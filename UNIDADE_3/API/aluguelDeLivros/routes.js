import express from "express"
// livros
import { adicionarLivros } from "./modulos/livros/adicionarLivros.js";
import { deletarLivros } from "./modulos/livros/deletarLivros.js";
import { atualizarLivro } from "./modulos/livros/editarLivros.js";
import { listarLivros } from "./modulos/livros/listarLivros.js";
// estudantes
import { adicionarEstudantes } from "./modulos/estudantes/adicionarEstudante.js";
import { deletarEstudantes } from "./modulos/estudantes/deletarEstudante.js";
import { listarEstudantes } from "./modulos/estudantes/listarEstudantes.js";
import { atualizarEstudantes } from "./modulos/estudantes/editarEstudantes.js";
// alugueis
import { adicionarAluguel } from "./modulos/alugueis/adicionarAluguel.js";
import { devolucaoLivro } from "./modulos/alugueis/adicionarDevolucao.js";
import { deletarAlugueis } from "./modulos/alugueis/deletarAluguel.js";
import { listarAlugueis } from "./modulos/alugueis/listarAlugueis.js";
import { editarAluguel } from "./modulos/alugueis/editarAluguel.js";

export const router = express.Router();
// alugueis
router.delete("/aluguel/:idAluguel", deletarAlugueis)
router.post("/aluguel", adicionarAluguel)
router.put("/aluguel/devolucao/:idAluguel", devolucaoLivro)
router.get("/aluguel", listarAlugueis)
router.put("/aluguel/:idAluguel", editarAluguel)
// estudantes
router.get("/estudantes", listarEstudantes)
router.delete("/estudantes/:id", deletarEstudantes)
router.post("/estudantes", adicionarEstudantes)
router.put("/estudantes/:id", atualizarEstudantes)
// livros
router.get("/livros", listarLivros)
router.post("/livros", adicionarLivros)
router.delete("/livros/:id", deletarLivros)
router.put("/livros/:id", atualizarLivro)