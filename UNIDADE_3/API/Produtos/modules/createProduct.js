import MProduct from "../models/schemaProduct.js";

export async function createProduct (req, res) {
  const { name, quantity } = req.body;
try {
  if (!name || !quantity) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios.",
    });
  }

  const newProduct = new MProduct({
    name,
    quantity,
  });

  const saveProduct = await newProduct.save();
  
  res.status(201).send(`Produto adicionado`, saveProduct);
}
catch (err){
  console.error(`O erro é: ${err}`)
}
};