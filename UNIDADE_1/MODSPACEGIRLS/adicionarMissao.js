import { exibirMenu } from "./spacegirlsMOD.js";
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

import { missoes } from "./spacegirlsMOD.js";

export function adicionarMissao() {
    console.clear();
    rl.question("Insira o nome da missão que deseja adicionar: \n", (nome) => {
      console.clear()
      rl.question("Insira o destino da missão: ", (destino) => {
        destino = destino.toLowerCase();
        console.clear()
        rl.question(
          "Insira qual a prioridade da missão:\n1-Minima\n2-Baixa\n3-Média\n4-Alta\n5-Crítico\n",
          (prioridade) => {
            prioridade = parseInt(prioridade);
            adicionarTripulante(nome, destino, prioridade, []);
          }
        );
      });
    });
  }

function adicionarTripulante(nome, destino, prioridade, tripulantesAtuais) {
    console.clear()
  rl.question(
    `Insira o nome do tripulante que seja adicionar na missão "${nome}":\n`,
    (nomeTripulante) => {
      tripulantesAtuais.push(nomeTripulante);
      console.clear();
      console.log(`Tripulante '${nomeTripulante}' adicionado na missao "${nome}"`);
      console.log("--------------------------------------")
      rl.question(
        `Deseja adicionar outro tripulante na missão ${nome}?\n1-Sim\nOutro-Não\n`,
        (outroTripulante) => {
          outroTripulante = parseInt(outroTripulante);
          switch (outroTripulante) {
            case 1:
                console.clear()
              adicionarTripulante(nome, destino, prioridade, tripulantesAtuais);
              break;
            default:
                
              const missao = {
                Nome: nome,
                Destino: destino,
                Prioridade: prioridade,
                tripulantes: tripulantesAtuais,
                concluida: false,
              };
              console.clear()
              missoes.push(missao);
              console.log("Missao adicionada com sucesso!\n");
              exibirMenu();
              break;
          }
        }
      );
    }
  );
}