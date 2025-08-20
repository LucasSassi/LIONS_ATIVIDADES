import { baralhos, prompt, exibirMenu } from "../menu.js";

export function listarBaralhos() {
    console.clear()
  console.log("Baralhos existentes:");
  baralhos.forEach((baralho) => {
    console.log(`- ${baralho.titulo}`);
  });
  console.log("Aperte ENTER para voltar ao menu...");
  prompt("");
  console.clear()
  exibirMenu();
}
