const { clear } = require("console");
const fs = require("fs");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lembretes = [];

const DBMASTER = 'lembretes.json'

function salvarDados(nomeArquivo, dados, callback) {
  const jsonString = JSON.stringify(dados, null, 2);
  fs.writeFile(nomeArquivo, jsonString, (err) => {
      if (err) {
          console.log(`Erro ao salvar o arquivo '${nomeArquivo}':`, err);
      } else {
          //console.log(`Dados de '${nomeArquivo}' salvos com sucesso!`);
      }
      if (callback) callback();
  });
}

function carregarDados(nomeArquivo, callback) {
  fs.readFile(nomeArquivo, 'utf8', (err, data) => {
      if (err) {
          if (err.code === 'ENOENT') {
              console.log(`Arquivo '${nomeArquivo}' não encontrado. Iniciando com uma lista vazia.`);
              callback([]);
          } else {
              console.log(`Erro ao carregar o arquivo '${nomeArquivo}':`, err);
              callback([]);
          }
          return;
      }

      try {
          const dados = JSON.parse(data);
          console.log(`Dados de '${nomeArquivo}' carregados com sucesso.`);
          callback(dados);
      } catch (parseErr) {
          console.log(`Erro ao analisar o JSON do arquivo '${nomeArquivo}':`, parseErr);
          callback([]);
      }
  });
}

function exibirMenu() {
  console.log(
    "=========MENU=========\n1-Adicionar lembrete\n2-Listar lembrete\n3-Editar lembrete\n4-Marcar como concluído\n5-Deletar lembrete\n0-Sair do programa"
  );
  rl.question("Insira a opção desejada.\n", (opcaoMenu) => {
    opcaoMenu = parseInt(opcaoMenu, 10);
    switch (opcaoMenu) {
      case 1:
        adicionarLembrete();
        break;
      case 2:
        listarLembrete();
        break;
      case 3:
        editarLembrete();
        break;
      case 4:
        concluirLembrete();
        break;
      case 5:
        console, clear();
        deletarLembrete();
        break;
      case 0:
        process.exit();
        break;
      default:
        console.log("Insira uma opção válida!\n");
        exibirMenu();
    }
  });

  function adicionarLembrete() {
    console.clear();
    rl.question(
      "Digite o nome do lembrete que deseja adicionar: ",
      (nomelembrete) => {
        rl.question(
          "Insira o prazo em dias pra o lembrete: ",
          (prazolembrete) => {
            if (isNaN(prazolembrete) || prazolembrete < 1) {
              console.log("O prazo precisa ser expresso em numeros!!");
              adicionarLembrete();
            } else {
              lembretes.push({
                nome: nomelembrete,
                prazo: prazolembrete,
                status: false,
              });
              salvarDados(DBMASTER, lembretes, () => {
                console.log(`O lembrete: ${nomelembrete} foi inserido com sucesso, tempo para expirar é de ${prazolembrete} diias.`);
                rl.question("Deseja adicionar um nome lembrete? (s/n): ", (confirmnewproduct) => {
                    confirmnewproduct = confirmnewproduct.toLowerCase();
                    if (confirmnewproduct === "s" || confirmnewproduct === "sim") {
                        adicionarLembrete();
                    } else {
                      console.clear();
                      exibirMenu();
                    }
                });
            });
            }
          }
        );
      }
    );
  }
}

function listarLembrete() {
  console.clear();
  if (lembretes.length <= 0) {
    console.log("Não ha lembretes.");

    exibirMenu();
  } else {
    console.log("======LEMBRETES======");
    lembretes.forEach((lembrete, index) => {
      console.log(
        `${index + 1} - Lembrete: ${lembrete.nome}  | Prazo: ${
          lembrete.prazo
        } | Situação: ${lembrete.status}`
      );
    });
    exibirMenu();
  }
}

function concluirLembrete() {
  console.clear();
  console.log("======LEMBRETES======");
  lembretes.forEach((lembrete, index) => {
    console.log(
      `${index + 1} - Lembrete: ${lembrete.nome}  | Prazo: ${
        lembrete.prazo
      } | Situação: ${lembrete.status}`
    );
  });
  rl.question("Qual lembrete deseja marcar como concluído?\n", (num) => {
    const index = parseInt(num, 10) - 1;
    if (index < 0 || index >= lembretes.length) {
      console.log("\nNúmero inválido!");
      console.log("\nPressione Enter para voltar ao menu");
      return rl.question("", exibirMenu);
    }
    lembretes[index].status = true;
    console.clear();
    console.log("\nO lembrete foi marcado como conluído!");
    return exibirMenu();
  });
}

function editarLembrete() {
  console.clear();
  console.log("======LEMBRETES======");
  if (lembretes.length == 0) {
    console.log("Nenhum lembrete adicionado para editar.");
    console.log("Retornando ao menu. Tecle Enter...");
    rl.question("", exibirMenu);
  }
  lembretes.forEach((lembrete, index) => {
    console.log(
      `${index + 1} - Lembrete: ${lembrete.nome} | Prazo: ${
        lembrete.prazo
      } | Situação: ${lembrete.status}`
    );
  });
  rl.question("\nDigite o número do lembrete que deseja editar: ", (num) => {
    const index = parseInt(num, 10) - 1;
    if (index < 0 || index >= lembretes.lenght) {
      console.log("Número inválido.");
    }
    rl.question("Digite o novo nome do lembrete: ", (nome) => {
      rl.question("Digite o novo prazo do lembrete: ", (prazo) => {
        if (prazo < 0) {
          console.log("Prazo invalido, insira novamente!");
          editarLembrete();
        } else {
          rl.question("Digite a situção(false/true): ", (status) => {
            lembretes[index] = {
              nome,
              prazo,
              status,
            };
            console.clear();
            console.log("Lembretes editados.");
            console.log("Pressione Enter para retornar ao menu...");
            rl.question("", exibirMenu);
          });
        }
      });
    });
  });
}

function deletarLembrete() {
  lembretes.forEach((lembrete, index) => {
    console.log(
      `${index + 1} - Lembrete: ${lembrete.nome}  | Prazo: ${
        lembrete.prazo
      } | Situação: ${lembrete.status}`
    );
  });
  rl.question("Insira qual lembrete deseja deletar: \n", (opcaoDelete) => {
    opcaoDelete = parseInt(opcaoDelete) - 1;
    if (opcaoDelete < 0 || opcaoDelete > lembretes.length) {
      console.log("Opcao invalida, escolha um lembrete valido!");
      deletarLembrete();
    } else {
      console.clear();
      salvarDados(DBMASTER, lembretes, () => {
        console.log(`Lembrete ${lembretes[opcaoDelete].nome} deletado!`);
        lembretes.splice(opcaoDelete, 1);
        exibirMenu();
    });
    }
  });
}

console.log("Iniciando o sistema...");
    carregarDados(DBMASTER, (dadoslembrete) => {
        lembretes = dadoslembrete;
        exibirMenu();
    });