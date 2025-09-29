import MBaralho from "../Schemas/schemaBaralhos.js";

export async function listarBaralhos(req, res) {
  const Baralhos = await MBaralho.find()

  res.status(200).send(Baralhos)
}
