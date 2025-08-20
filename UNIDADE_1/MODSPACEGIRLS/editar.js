import { exibirMenu, missoes, prompt } from "./spacegirlsMOD.js";

export function editarMissao() {
  console.clear();

  console.log("====== MISSÕES DISPONÍVEIS ======");
  if (missoes.length === 0) {
    console.log("Nenhuma missão cadastrada.");
    exibirMenu();
    return;
  }

  missoes.forEach((missao, index) => {
    console.log(
      `ID: ${index + 1} | Nome: ${missao.Nome} | Prioridade: ${
        missao.Prioridade
      } | Destino: ${missao.Destino}`
    );

    if (
      missao.tripulantes &&
      Array.isArray(missao.tripulantes) &&
      missao.tripulantes.length > 0
    ) {
      console.log("  --- Tripulante(s) desta missão ---");
      missao.tripulantes.forEach((tripulante) => {
        console.log(`  - ${tripulante}`);
      });
    } else {
      console.log("  Nenhum tripulante atribuído a esta missão.");
    }
    console.log("------------------------------------");
  });

  console.log("Qual missão você deseja editar? Digite o ID: ");
  let idMissao = prompt("> ");

  idMissao = parseInt(idMissao);

  if (isNaN(idMissao) || idMissao < 1 || idMissao > missoes.length) {
    console.clear();
    console.log("ID de missão inválido. Por favor, digite um ID existente.");
    prompt("Pressione Enter para continuar...");
    editarMissao();
    return;
  }

  const indexMissao = idMissao - 1;
  const missaoParaEditar = missoes[indexMissao];

  console.log(
    `(Atual: ${missaoParaEditar.Nome}) Digite o NOVO nome da missão (ou deixe em branco): `
  );
  let novoNome = prompt("> ");

  if (novoNome !== "") {
    missaoParaEditar.Nome = novoNome;
  }

  console.log(
    `(Atual: ${missaoParaEditar.Destino}) Digite o NOVO destino da missão (ou deixe em branco): `
  );
  let novoDestino = prompt("> ");

  if (novoDestino !== "") {
    missaoParaEditar.Destino = novoDestino;
  }

  solicitarNovaPrioridade();

  function solicitarNovaPrioridade() {
    console.log(
      `(Atual: ${missaoParaEditar.Prioridade}) Digite a NOVA prioridade da missão (1 a 5, ou deixe em branco): `
    );
    let novaPrioridadeInput = prompt("> ");

    if (novaPrioridadeInput === "") {
      solicitarNovosTripulantes();
    }

    const parsedPrioridade = parseInt(novaPrioridadeInput);
    if (
      isNaN(parsedPrioridade) ||
      parsedPrioridade < 1 ||
      parsedPrioridade > 5
    ) {
      console.clear();
      console.log("Prioridade inválida.");
      solicitarNovaPrioridade();
    } else {
      missaoParaEditar.Prioridade = parsedPrioridade;
      solicitarNovosTripulantes();
    }
  }

  function solicitarNovosTripulantes() {
    console.log("Deseja adicionar novos tripulantes a esta missão? (s/n): ");
    let respostaAddTripulante = prompt("> ");

    if (respostaAddTripulante.toLowerCase() === "s") {
      adicionarTripulanteNaEdicao();
    } else {
      console.clear();
      console.log("=== Missão editada===");
      exibirMenu();
    }
  }

  function adicionarTripulanteNaEdicao() {
    console.log(
      `Insira o nome do tripulante que deseja adicionar à missão "${missaoParaEditar.Nome}": `
    );
    let nomeTripulante = prompt("> ");
    missaoParaEditar.tripulantes.push(nomeTripulante);
    console.clear();
    console.log(`"${nomeTripulante}" adicionado à missão.`);
    console.log("Deseja adicionar outro tripulante a esta missão? (s/n): ");
    let continuarAdicionar = prompt("> ");
    if (continuarAdicionar.toLowerCase() === "s") {
      console.clear();
      adicionarTripulanteNaEdicao();
    } else {
      console.clear();
      console.log("=== Missão editada===");
      exibirMenu();
    }
  }
}