import { contatos, exibirMenu, prompt } from "./atvdd.js";

export function atualizarContato() {
  console.clear();
  console.log("=========CONTATOS========="); // saida
  contatos.forEach((contato) => {
    console.log(
      `ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`
    ); // saida
  });

  console.log("Qual o ID do contato que deseja atualizar?: "); // saida
  let idSelecionado = prompt("> "); // entrada
  idSelecionado = parseInt(idSelecionado);

  const contatoParaAtualizar = contatos.find(
    (contato) => contato.id === idSelecionado
  );

  if (!contatoParaAtualizar) {
    console.clear();
    console.log("Contato não encontrado. Por favor, digite um ID válido."); // saida
    prompt("Pressione Enter para continuar..."); // entrada
    atualizarContato()
  }

  console.log(
    `(Atual: ${contatoParaAtualizar.nome}) Digite o NOVO nome do contato (ou deixe em branco): `
  ); // saida
  let novoNome = prompt("> "); // entrada

  if (novoNome !== "") {
    contatoParaAtualizar.nome = novoNome;
  }

  console.log(
    `(Atual: ${contatoParaAtualizar.telefone}) Digite o NOVO telefone do contato (ou deixe em branco): `
  ); // saida
  let novoTelefone = prompt("> "); // entrada

  const telefoneFormatado2 = `(${novoTelefone.substring(0,2)})${novoTelefone.substring(2, 7)}-${novoTelefone.substring(7)}`;
  contatoParaAtualizar.telefone = telefoneFormatado2;

  if (novoTelefone > 11){
    console.clear()
    console.log("Numero invalido")// daida
    prompt("Pressione Enter para continuar..."); // entrada
    atualizarContato()
  }

  if (novoTelefone !== "") {
    contatoParaAtualizar.telefone = telefoneFormatado2;
  }

  console.log(
    `(Atual: ${contatoParaAtualizar.email}) Digite o NOVO email do contato (ou deixe em branco): `
  ); // saida
  let novoEmail = prompt("> "); // entrada

  if (novoEmail !== "") {
    contatoParaAtualizar.email = novoEmail;
  }

  console.clear();
  console.log(
    `===Contato: ${contatoParaAtualizar.nome}, editado com sucesso!! `
  ); // saida
  exibirMenu();
}