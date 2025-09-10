import { lerDadosLivros, salvarDadosLivros } from "../../index.js";

export function deletarLivros (req, res){
  const idParaDeletar = Number(req.params.id);
  const livros = lerDadosLivros();

  const livroIndex = livros.findIndex(
    (livro) => livro.id === idParaDeletar
  );

  if (livroIndex === -1) {
    return res.status(404).json({
      message: "livro não encontrado com o id fornecido.",
    });
  }

  livros.splice(livroIndex, 1);

  salvarDadosLivros(livros);

  res.status(200).send("Livro deletado com sucesso!");
};