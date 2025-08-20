import { exibirMenu } from "./spacegirlsMOD.js";
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

import { missoes } from "./spacegirlsMOD.js";

export function listarMissoes() {
  missoes.forEach((index, missao) => {
    console.log(missoes);
    exibirMenu();
  });
}

