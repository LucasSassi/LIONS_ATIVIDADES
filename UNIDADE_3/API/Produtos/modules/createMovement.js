import MMovement from "../models/schemaMovement.js";

export async function createMovement(idProduct, type, quantity) {
  try {
    const newMovement = new MMovement({
      idProduct,
      type,
      quantity,
    });

    await newMovement.save();
  } catch (err) {
    console.error(`O erro é: ${err}`);
  }
}
