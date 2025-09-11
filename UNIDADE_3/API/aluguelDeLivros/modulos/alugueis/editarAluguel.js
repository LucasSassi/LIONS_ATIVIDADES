import { salvarDadosAlugueis, lerDadosAlugueis } from "../../index.js";

export function editarAluguel(req, res) {
  try {
    const idAluguel = Number(req.params.idAluguel);
    const { idEstudante, idLivro } = req.body;

    const alugueis = lerDadosAlugueis();
    const aluguelIndex = alugueis.findIndex((aluguel) => aluguel.idAluguel === idAluguel);

    if (aluguelIndex == -1) {
      return res
        .status(404)
        .send("Não foi possível encontrar um aluguel com esse id");
    }

    const dataDevolucao1 = alugueis[aluguelIndex].dataDevolucao;
    const dataAluguel1 = alugueis[aluguelIndex].dataAluguel;

    const aluguelAtualizado = {
      idAluguel: idAluguel,
      idLivro,
      idEstudante,
      dataAluguel: dataAluguel1,
      dataDevolucao: dataDevolucao1,
    };

    alugueis[aluguelIndex] = aluguelAtualizado;
    salvarDadosAlugueis(alugueis);

    // Lembre-se que esta mensagem ainda é logicamente incorreta, como discutido antes
    return res
      .status(200)
      .send(`Aluguel com ID ${idAluguel} foi atualizado com sucesso.`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}