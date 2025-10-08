import MProduct from "../models/schemaProduct.js";

export async function productList(req, res) {
  const products = await MProduct.find();
  
  res.status(200).json(products);
}
