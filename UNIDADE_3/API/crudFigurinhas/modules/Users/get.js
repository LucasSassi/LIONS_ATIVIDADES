import MUser from "../../models/schemaUsers.js";

export async function listFig(req, res) {
  try {
    const filter = {};

    if (req.query.nome) {
      filter.nome = req.query.nome;
    }

    const users = await MUser.find(filter);

    if (users.length === 0) {
      return res
        .status(404)
        .send("Nenhum usuario encontrado com esses critérios.");
    }

    res.status(200).json(users);
    
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar usuarios", error });
  }
}