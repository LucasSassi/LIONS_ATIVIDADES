import MMovement from "../models/schemaMovement.js";

export async function createMovement(movementData) {
  const newMovement = new MMovement({
    productid: movementData.productId,
    type: movementData.type,
    quantity: movementData.quantity,
    name: movementData.name
  });

  await newMovement.save();
}