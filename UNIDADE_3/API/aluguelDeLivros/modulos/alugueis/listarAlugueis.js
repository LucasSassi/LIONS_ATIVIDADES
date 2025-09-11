import { lerDadosAlugueis } from "../../index.js";

export function listarAlugueis(req, res){
    const alugueis = lerDadosAlugueis()

    if (alugueis.length == 0){
        return res.status(404).send("Nenhum aluguel encontrado")
    }

    res.status(200).json(alugueis)
}