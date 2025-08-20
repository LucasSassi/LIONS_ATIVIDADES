import { exibirMenu, candidatos, prompt } from "./Urna.js";

export function Votacao(){
    console.clear()
    console.log("======RESULTADO DA VOTAÇÃO======");

    let todosOsVotos = 0;
    candidatos.forEach((candidato) => {
        todosOsVotos += candidato.votos;
    });

    if (todosOsVotos === 0) {
        console.log("Nenhum voto registrado ainda.");
    } else {
        candidatos.forEach((candidato) => {
            let porcentagem = (candidato.votos / todosOsVotos) * 100;

            console.log(
                `Numero: ${candidato.numero}, Nome: ${candidato.nome}\n` +
                `QUANTIDADE DE VOTOS: ${candidato.votos} (${porcentagem.toFixed(2)}%)`
            );
        });
    }

    prompt("Pressione Enter para voltar ao menu.");
    console.clear();
    exibirMenu();
}