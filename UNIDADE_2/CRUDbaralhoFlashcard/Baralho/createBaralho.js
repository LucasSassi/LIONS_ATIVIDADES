import { baralhos, prompt, exibirMenu } from "../menu.js";

export function adicionarBaralho() {
  console.clear();
  console.log("Qual o nome do baralho que deseja adicionar?");
  let nomeBaralho = prompt("> ");

  baralhos.push({
    titulo: nomeBaralho,
    id: Date.now(),
  })
  console.clear()
  console.log("======BARALHO ADICIONADO COM SUCESSO======");
  exibirMenu()

}
