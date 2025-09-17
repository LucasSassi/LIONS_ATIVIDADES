import { lerDadosProdutos, salvarDadosProdutos } from "../index.js";

export function deletarProdutos (req, res){
  const idParaDeletar = Number(req.params.id);
  const produtos = lerDadosProdutos();

  const ProdutoIndex = produtos.findIndex(
    (produto) => produto.id === idParaDeletar
  );

  if (ProdutoIndex === -1) {
    return res.status(404).json({
      message: "Produto não encontrado com o id fornecido.",
    });
  }

  produtos.splice(ProdutoIndex, 1);

  salvarDadosProdutos(produtos);

  res.status(200).send("Produto deletado com sucesso!");
};