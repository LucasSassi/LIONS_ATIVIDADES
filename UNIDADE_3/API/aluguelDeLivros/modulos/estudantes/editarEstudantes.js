import MEstudante from '../../schemaEstudantes.js';

export async function atualizarEstudantes(req, res) {
  try {
    const { id } = req.params;

    const novosDados = req.body;

    const estudanteAtualizado = await MEstudante.findByIdAndUpdate(
      id,          // O ID do documento a ser atualizado
      novosDados,  // Os novos dados para o documento
      {
        new: true, // Opção: Retorna o documento *depois* de atualizado (essencial!)
        runValidators: true, // Opção: Garante que as validações do Schema sejam aplicadas na atualização
      }
    );

    if (!estudanteAtualizado) {
      return res.status(404).json({ message: "Estudante não encontrado." });
    }
    res.status(200).json({message: "Estudante atualizado"});

  } catch (error) {
    console.error("Erro ao atualizar estudante:", error);
    res.status(500).json({ message: `Ocorreu um erro no servidor: ${error.message}` });
  }
}
