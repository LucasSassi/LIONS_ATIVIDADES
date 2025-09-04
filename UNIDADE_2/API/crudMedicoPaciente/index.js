import express from "express";
import fs from "fs";
import { router } from "./modulos/routes.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(router);

// FUNCOES DE LEITURA E ESCRITA DE DADOS //

// Caminhos para os arquivos no "banco de dados"
export const jsonMedicos = "./json/medicos.json";
export const jsonPacientes = "./json/pacientes.json";
export const jsonConsultas = "./json/consultas.json";

// --- FUNÇÕES DE LEITURA ---

function lerDados(caminhoArquivo) {
  if (!fs.existsSync(caminhoArquivo)) {
    return [];
  }
  const dadosString = fs.readFileSync(caminhoArquivo, "utf-8");
  if (!dadosString) {
    return [];
  }
  return JSON.parse(dadosString);
}

export function lerDadosMedicos() {
  return lerDados(jsonMedicos);
}

export function lerDadosPacientes() {
  return lerDados(jsonPacientes);
}

export function lerDadosConsultas() {
  return lerDados(jsonConsultas);
}

// --- FUNÇÕES DE ESCRITA ---

// Função genérica (base) para salvar dados
function salvarDados(caminhoArquivo, dados) {
  const dadosJson = JSON.stringify(dados, null, 2);
  fs.writeFileSync(caminhoArquivo, dadosJson);
}

// Funções específicas para salvar cada tipo de dado
export function salvarDadosMedicos(dados) {
  salvarDados(jsonMedicos, dados);
}

export function salvarDadosPacientes(dados) {
  salvarDados(jsonPacientes, dados);
}

export function salvarDadosConsultas(dados) {
  salvarDados(jsonConsultas, dados);
}
////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  // setTimeout(() => {

  // }, 5000)
});
