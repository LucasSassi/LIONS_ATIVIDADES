import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

function inverterComLoop() {
  // exercicio 1

  console.log("digite algo: ");
  let string = prompt("> ");
  const arrayDeCaracteres = string.split("");

  let stringInvertida = "";

  for (let i = arrayDeCaracteres.length - 1; i >= 0; i--) {
    stringInvertida += arrayDeCaracteres[i];
  }

  console.log(stringInvertida);
}

inverterComLoop();

// exercicio 2

console.log("\ndigite uma (ou mais) vogal: ");
let vogal = prompt("> ");
vogal = vogal.toLowerCase();
let cont = 0, conta = 0,conte = 0,conti = 0,conto = 0,contu = 0;

const arrayDeVogais = vogal.split("");
const arrayDeNumeros = [];
for (let u = 0; u < arrayDeVogais.length; u++) {
  if (vogal[u] == "a") {
    arrayDeNumeros[u] = 1;
    conta++;
  } else if (vogal[u] == "e") {
    arrayDeNumeros[u] = 2;
    conte++;
  } else if (vogal[u] == "i") {
    arrayDeNumeros[u] = 3;
    conti++;
  } else if (vogal[u] == "o") {
    arrayDeNumeros[u] = 4;
    conto++;
  } else if (vogal[u] == "u") {
    arrayDeNumeros[u] = 5;
    contu++;
  } else {
    arrayDeNumeros[u] = 0;
  }

  cont = conta + conte + conti + conto + contu;
}

let arrayPronto = "";

for (let p = 0; p < arrayDeVogais.length; p++) {
  arrayPronto = arrayPronto + arrayDeNumeros[p];
}

let contaVogais = 0;

contavogalunica()

function contavogalunica(){
  if (conta > 0){
    contaVogais++;
  } 
  if (conte > 0){
    contaVogais++;
  } 
  if (conti > 0){
    contaVogais++;
  } 
  if (conto > 0){
    contaVogais++;
  } 
  if (contu > 0){
    contaVogais++;
  } 
}


console.log(
  `Transformando em numeros (a = 1, e = 2, ... ,u = 5, restante = 0): ${arrayPronto}\nQuantidade de vogais: ${cont}, numero de vogais unicas: ${contaVogais}`
);
