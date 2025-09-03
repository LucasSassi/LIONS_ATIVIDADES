import express from "express"
import { adicionarMedico } from "./adicionarMedico.js";
import { adicionarPaciente } from "./adicionarPaciente.js";
import { adicionarConsulta } from "./adicionarConsultas.js";
import { listarMedicos } from "./listarMedicos.js";
import { listarPacientes } from "./listarPacientes.js";
import { listarConsultas } from "./listarConsultas.js";

export const router = express.Router()
router.get("/clinica/listar/consultas", listarConsultas)
router.get("/clinica/listar/pacientes", listarPacientes)
router.get("/clinica/listar/medicos", listarMedicos)
router.post("/clinica/adicionar/consultas", adicionarConsulta)
router.post("/clinica/adicionar/paciente", adicionarPaciente)
router.post("/clinica/adicionar/medico", adicionarMedico);