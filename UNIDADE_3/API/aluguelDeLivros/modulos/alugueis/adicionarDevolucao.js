import MAluguel from "../../schemaAluguel.js";

export async function devolucaoLivro(req, res) {
  try {
    const { idAluguel } = req.params;

    const aluguelDevolvido = await MAluguel.findByIdAndUpdate(
      idAluguel,
      { dataDevolucao: new Date() },
      { new: true }
    );

    if (!aluguelDevolvido) {
      return res.status(404).json({ message: "Aluguel não encontrado." });
    }

    return res.status(200).json({
      message: "Livro devolvido com sucesso!",
      aluguel: aluguelDevolvido,
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
}