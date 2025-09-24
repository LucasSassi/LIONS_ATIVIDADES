import MLivro from '../../schemaLivro.js';

export async function atualizarLivro(req, res) {
  try {
    const { id } = req.params;

    const novosDados = req.body;

    const livroAtualizado = await MLivro.findByIdAndUpdate(
      id,          // O ID do documento a ser atualizado
      novosDados,  // Os novos dados para o documento
      {
        new: true, // Opção: Retorna o documento *depois* de atualizado (essencial!)
        runValidators: true, // Opção: Garante que as validações do Schema sejam aplicadas na atualização
      }
    );

    if (!livroAtualizado) {
      return res.status(404).json({ message: "Estudante não encontrado." });
    }
    res.status(200).json({message: "Livro atualizado"});

  } catch (error) {
    console.error("Erro ao atualizar livro:", error);
    res.status(500).json({ message: `Ocorreu um erro no servidor: ${error.message}` });
  }
}
