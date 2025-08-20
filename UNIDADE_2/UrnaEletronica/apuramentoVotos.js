import { exibirMenu, candidatos, prompt, eleitores } from "./Urna.js";

export function apuramentoVotos() {
  console.clear();
  candidatos.forEach((candidato) => {
    console.log(`Numero: ${candidato.numero}, Nome: ${candidato.nome}`);
  });

  console.log("Digite seu CPF: (SOMENTE OS NUMEROS, SEM PONTOS E SEM TRAVESSÕES): ");
  let CPF = prompt("> ");


  const eleitorEncontrado = eleitores.find((eleitor) => eleitor.CPF === CPF);

  if (eleitorEncontrado) {
    console.clear();
    console.log("Você já votou!");
    exibirMenu();
    return;
  }
  
  eleitores.push({
    CPF,
  });

  console.log("Digite o numero do candidato que deseja votar: ");
  let numeroSelecionado = prompt("> ");
  let numeroDoVoto = parseInt(numeroSelecionado);

  const candidatoVotado = candidatos.find(
    (candidato) => candidato.numero === numeroDoVoto
  );

  if (candidatoVotado) {
    candidatoVotado.votos++;
    console.clear();
    console.log(`Você votou em ${candidatoVotado.nome}!`);
  } else {
    console.log("Número de candidato inválido. Por favor, tente novamente.");
  }

  exibirMenu();
}