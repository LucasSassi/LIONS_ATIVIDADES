import { lerDadosProdutos, salvarDadosProdutos } from "../index.js";

export function adicionarProduto(req, res) {
  const { nome, categoria, preco, estoque } = req.body;

  if (!nome || !categoria || !preco || !estoque) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios.",
    });
  }

const produtos = lerDadosProdutos();

  const novoProduto = {
    id: Date.now(),
    nome,
    categoria,
    preco,
    estoque,
  };

  produtos.push(novoProduto);

  salvarDadosProdutos(produtos);
  res.status(201).send("Produto registrado com sucesso!");
}
