import MMovement from "../models/schemaMovement.js";

export async function movmentList(req, res) {
  const movments = await MMovement.find();
  
  res.status(200).json(movments);
}
