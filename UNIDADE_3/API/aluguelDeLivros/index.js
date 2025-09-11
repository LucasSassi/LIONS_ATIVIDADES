import express from "express";
import fs from "fs";
import { router } from "./routes.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(router);

// FUNCOES DE LEITURA E ESCRITA DE DADOS //

// Caminhos para os arquivos no "banco de dados"
export const jsonLivros = "./json/livros.json";
export const jsonEstudantes = "./json/estudantes.json";
export const jsonAlugueis = "./json/alugueis.json"

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

export function lerDadosLivros() {
  return lerDados(jsonLivros);
}

export function lerDadosEstudantes() {
  return lerDados(jsonEstudantes);
}

export function lerDadosAlugueis() {
  return lerDados(jsonAlugueis);
}

// --- FUNÇÕES DE ESCRITA ---

// Função genérica (base) para salvar dados
function salvarDados(caminhoArquivo, dados) {
  const dadosJson = JSON.stringify(dados, null, 2);
  fs.writeFileSync(caminhoArquivo, dadosJson);
}

// Funções específicas para salvar cada tipo de dado
export function salvarDadosLivros(dados) {
  salvarDados(jsonLivros, dados);
}

export function salvarDadosEstudantes(dados) {
  salvarDados(jsonEstudantes, dados);
}

export function salvarDadosAlugueis(dados) {
    salvarDados(jsonAlugueis, dados);
  }
////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
