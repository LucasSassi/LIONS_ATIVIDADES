import MAluguel from "../../schemaAluguel.js";

export async function deletarAlugueis(req, res) {
  try {
    const idParaDeletar = req.params.idAluguel;

    const deletarAluguel = await MAluguel.findByIdAndDelete(idParaDeletar);

    res.status(200).send("Aluguel deletado com sucesso!", deletarAluguel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
}
