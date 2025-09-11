import { lerDadosLivros, salvarDadosLivros } from "../../index.js";

export function adicionarLivros (req, res) {
  const { titulo, autor, ano, genero } = req.body;

  if (!titulo || !autor || !ano || !genero) {
    return res.status(400).json({
      message: "Todos os campos (titulo, autor, ano e genero) são obrigatórios.",
    });
  }

  const novoLivro = {
    id: Date.now(),
    titulo,
    autor,
    ano,
    genero,
  };

  const livros = lerDadosLivros();

  livros.push(novoLivro);

  salvarDadosLivros(livros);

  res.status(201).send(`Livro "${novoLivro.titulo}" adicionado`);
};