import MBaralho from "../Schemas/schemaBaralhos.js";

export async function atualizarBaralho(req, res) {
  try {
    const { idBaralho } = req.params;

    const novosDados = req.body;

    const baralhoAtualizado = await MBaralho.findByIdAndUpdate(
      idBaralho,          // O ID do documento a ser atualizado
      novosDados,  // Os novos dados para o documento
      {
        new: true, // Opção: Retorna o documento *depois* de atualizado (essencial!)
        runValidators: true, // Opção: Garante que as validações do Schema sejam aplicadas na atualização
      }
    );

    if (!baralhoAtualizado) {
      return res.status(404).json({ message: "Baralho não encontrado." });
    }
    res.status(200).json({message: "Baralho atualizado"});

  } catch (error) {
    console.error("Erro ao atualizar Baralho:", error);
    res.status(500).json({ message: `Ocorreu um erro no servidor: ${error.message}` });
  }
}
