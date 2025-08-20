import { exibirMenu, candidatos, prompt } from "./Urna.js";

export function adicionarCandidato(){
    console.clear();
    
    let nome;
    let nomeValido = false;
    while (!nomeValido) {
        console.log("Digite o nome do candidato que deseja adicionar: ");
        nome = prompt("> ");
        nomeValido = true;
    }

    let numero;
    let numeroValido = false;
    while (!numeroValido) {
        console.log("Qual o numero do candidato?: ");
        numero = prompt("> ");
        let numeroInteiro = parseInt(numero);

        if (isNaN(numeroInteiro)) {
            console.log("Número inválido. Digite apenas números.");
        } else {
            const numeroExistente = candidatos.some(candidato => candidato.numero === numeroInteiro);
            if (numeroExistente) {
                console.log(`O número ${numeroInteiro} já está em uso. Por favor, escolha outro.`);
            } else {
                numero = numeroInteiro;
                numeroValido = true;
            }
        }
    }

    candidatos.push({
        id: Date.now(),
        nome,
        numero,
        votos: 0,
    });
    
    console.clear();
    console.log("======CANDIDATO ADICIONADO======");
    exibirMenu();
}