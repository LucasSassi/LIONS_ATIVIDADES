import express from "express";
import fs from "fs";
import { router } from "./modulos/routes.js";
const app = express();
const port = 8080;


app.use(express.json());
app.use(router)

// Caminho para o arquivo no "banco de dados"
export const dbPath = "./estudantes.json";

// --- Funções Auxiliares para ler e salvar no arquivo ----

export function lerDados() {
  if (!fs.existsSync(dbPath)) {
    return [];
  }
  const dadosJson = fs.readFileSync(dbPath, "utf-8");
  if (!dadosJson) {
    return [];
  }
  return JSON.parse(dadosJson);
}

export function salvarDados(dados) {
  const dadosJson = JSON.stringify(dados, null, 2);
  fs.writeFileSync(dbPath, dadosJson);
}

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
