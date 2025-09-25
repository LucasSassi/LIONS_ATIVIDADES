import MAluguel from "../../schemaAluguel.js";

export async function adicionarAluguel(req, res) {
  const { idLivro, idEstudante } = req.body;

  try {
    
    const livroJaAlugado = await MAluguel.findOne({
      idLivro: idLivro,
      dataDevolucao: null
    });

    if (livroJaAlugado) {
      return res.status(400).json({
        message: "Este livro já está alugado e não foi devolvido.",
      });
    }

    const novoAluguel = new MAluguel({
      idLivro,
      idEstudante,
      dataAluguel: new Date(),
      dataDevolucao: null,
    });

    const aluguelSalvo = await novoAluguel.save();

    res.status(201).json({
      message: "Aluguel registrado com sucesso!",
      aluguel: aluguelSalvo
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ocorreu um erro no servidor." });
  }
}