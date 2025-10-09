import MPet from "../models/schemaPets.js";

export async function listPet(req, res) {
  try {
    const filter = {};

    if (req.query.especie) {
      filter.especie = req.query.especie;
    }

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const pets = await MPet.find(filter);

    if (pets.length === 0) {
      return res.status(404).send("Nenhum Pet encontrado com esses critérios.");
    }

    res.status(200).json(pets);
    
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar os pets", error });
  }
}