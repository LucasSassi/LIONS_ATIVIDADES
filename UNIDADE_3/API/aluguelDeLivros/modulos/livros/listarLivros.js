import MLivro from '../../schemaLivro.js';

export async function listarLivros(req, res) {
  try {
    const livros = await MLivro.find();

    res.status(200).json(livros);
    
  } catch (error) {
    console.error("Erro ao listar livros:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor." });
  }
}