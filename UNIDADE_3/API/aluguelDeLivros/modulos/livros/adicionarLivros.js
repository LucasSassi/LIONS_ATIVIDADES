import MLivro from "../../schemaLivro.js";

export async function adicionarLivros (req, res) {
  const { titulo, autor, ano, genero } = req.body;

  if (!titulo || !autor || !ano || !genero) {
    return res.status(400).json({
      message: "Todos os campos (titulo, autor, ano e genero) são obrigatórios.",
    });
  }

  const novoLivro = new MLivro ({
    titulo,
    autor,
    ano,
    genero,
  });

  const salvarLivros = await novoLivro.save();

  res.status(201).send(`Livro "${novoLivro.titulo}" adicionado`, salvarLivros);
};