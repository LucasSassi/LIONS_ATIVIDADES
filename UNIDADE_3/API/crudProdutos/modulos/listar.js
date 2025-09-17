import { lerDadosProdutos } from "../index.js";

export function listarProdutos(req, res) {
  const produtos = lerDadosProdutos();
  
  res.status(200).json(produtos);
}