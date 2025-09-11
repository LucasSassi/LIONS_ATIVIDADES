import { lerDadosAlugueis, salvarDadosAlugueis } from "../../index.js";

export function adicionarAluguel(req, res) {
  const { idLivro, idEstudante } = req.body;

  if (!idLivro || !idEstudante) {
    return res.status(400).json({
      message: "Todos os campos (idLivro e idEstudante) são obrigatórios.",
    });
  }

  const alugueis = lerDadosAlugueis();

  const livroJaAlugado = alugueis.some(
    (aluguel) => aluguel.idLivro === idLivro && aluguel.dataDevolucao === null
  );

  if (livroJaAlugado) {
    return res.status(400).json({
      message: "Este livro já está alugado e não foi devolvido.",
    });
  }

  const novoAluguel = {
    idAluguel: Date.now(),
    idLivro,
    idEstudante,
    dataAluguel: new Date().toISOString(),
    dataDevolucao: null,
  };

  alugueis.push(novoAluguel);

  salvarDadosAlugueis(alugueis);
  res.status(201).json({
    message: "Aluguel registrado com sucesso!",
  });
}
