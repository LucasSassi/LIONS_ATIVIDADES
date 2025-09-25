import MAluguel from '../../schemaAluguel.js';

export async function editarAluguel(req, res) {
  try {
    const  id  = req.params.idAluguel;

    const novosDados = req.body;

    const aluguelAtualizado = await MAluguel.findByIdAndUpdate(
      id,          // O ID do documento a ser atualizado
      novosDados,  // Os novos dados para o documento
      {
        new: true, // Opção: Retorna o documento *depois* de atualizado (essencial!)
        runValidators: true, // Opção: Garante que as validações do Schema sejam aplicadas na atualização
      }
    );



    if (!aluguelAtualizado) {
      return res.status(404).json({ message: "aluguel não encontrado." });
    }
    res.status(200).json({message: "aluguel atualizado"});

  } catch (error) {
    console.error("Erro ao atualizar aluguel:", error);
    res.status(500).json({ message: `Ocorreu um erro no servidor: ${error.message}` });
  }
}
