import { createMovement } from "./createMovement.js";
import MProduct from "../models/schemaProduct.js";

export async function decreaseQuantity(req, res) {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity || typeof quantity !== 'number' || quantity >= 0) {
      return res.status(400).json({
        message: "A quantidade (negativa) é obrigatória e deve ser um número positivo.",
      });
    }

    const updatedProduct = await MProduct.findByIdAndUpdate(
      id,
      { $inc: { quantity: quantity } },
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    await createMovement({
      productId: updatedProduct._id,
      name: updatedProduct.name,
      type: 'saida',
      quantity: quantity
    });
    
    res.status(200).json({
      message: "Quantidade retirada e movimentação registrada com sucesso!",
      product: updatedProduct,
    });

  } catch (err) {
    console.error(`O erro é: ${err}`);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
}