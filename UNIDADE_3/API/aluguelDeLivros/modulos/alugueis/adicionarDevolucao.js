import { salvarDadosAlugueis, lerDadosAlugueis } from "../../index.js";

export function devolucaoLivro(req, res) {
  try {
    const idAluguel = Number(req.params.idAluguel);

    const { idEstudante, idLivro, dataAluguel } = req.body

    const alugueis = lerDadosAlugueis();
    const aluguelIndex = alugueis.findIndex((aluguel) => aluguel.idAluguel === idAluguel);

    if (aluguelIndex === -1) {
      return res
        .status(400)
        .send("Nao foi possivel encontrar um aluguel com esse id");
    }

    const aluguelAtualizado = {
        idAluguel: idAluguel,
        idLivro,
        idEstudante,
        dataAluguel,
        dataDevolucao: new Date().toISOString()
      };

    alugueis[aluguelIndex] = aluguelAtualizado;
    salvarDadosAlugueis(alugueis);

    return res
      .status(200)
      .send(`Livro: ${aluguelAtualizado.idLivro}, foi devolvido`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
