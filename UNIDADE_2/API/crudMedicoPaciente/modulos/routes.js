import express from "express";
import { adicionarMedico } from "./adicionarMedico.js";
import { adicionarPaciente } from "./adicionarPaciente.js";
import { adicionarConsulta } from "./adicionarConsultas.js";
import { listarMedicos } from "./listarMedicos.js";
import { listarPacientes } from "./listarPacientes.js";
import { listarConsultas } from "./listarConsultas.js";
import { deletarMedico } from "./deletarMedico.js";
import { deletarPaciente } from "./deletarPaciente.js";
import { deletarConsulta } from "./deletarConsultas.js";
import { atualizarMedico } from "./atualizarMedicos.js";
import { atualizarPaciente } from "./atualizarPaciente.js";

export const router = express.Router();
router.put("/clinica/atualizar/pacientes/:ID", atualizarPaciente)
router.put("/clinica/atualizar/medicos/:CRM", atualizarMedico)
router.delete("/clinica/deletar/consultas/:IDconsulta", deletarConsulta);
router.delete("/clinica/deletar/pacientes/:ID", deletarPaciente);
router.delete("/clinica/deletar/medicos/:CRM", deletarMedico);
router.get("/clinica/listar/consultas", listarConsultas);
router.get("/clinica/listar/pacientes", listarPacientes);
router.get("/clinica/listar/medicos", listarMedicos);
router.post("/clinica/adicionar/consultas", adicionarConsulta);
router.post("/clinica/adicionar/pacientes", adicionarPaciente);
router.post("/clinica/adicionar/medicos", adicionarMedico);
