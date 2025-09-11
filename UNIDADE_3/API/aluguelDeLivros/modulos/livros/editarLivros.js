import { salvarDadosLivros, lerDadosLivros } from "../../index.js";

export function atualizarLivro(req, res) {
  try {
    const id = Number(req.params.id);
    const { titulo, genero, ano, autor } = req.body;

    if (!titulo || !genero || !ano || !autor) {
      return res
        .status(400)
        .send("Todos os campos sao obrigatorios (titulo, genero, ano e autor)");
    }

    const livros = lerDadosLivros();
    const livroIndex = livros.findIndex((livro) => livro.id === id);

    if (livroIndex === -1) {
      return res
        .status(400)
        .send("Nao foi possivel encontrar um livro com esse id");
    }

    const livroAtualizado = {
      id: id,
      titulo,
      autor,
      ano,
      genero,
    };

    livros[livroIndex] = livroAtualizado;
    salvarDadosLivros(livros);

    return res
      .status(200)
      .send(`Livro ${livroAtualizado.titulo}, atualizado com sucesso`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
