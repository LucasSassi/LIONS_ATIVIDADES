import MUser from "../../models/schemaUsers.js";

export async function createUser(req, res) {
  const { nome } = req.body;
  try {
    if (!nome) {
      return res.status(400).json({
        message: "Todos os campos são obrigatórios.",
      });
    }

    const newUser = new MUser({
      nome,
    });

    const saveProduct = await newUser.save();

    res.status(201).send(`Usuario: ${newUser.nome} adicionado`, saveProduct);
  } catch (err) {
    console.error(`O erro é: ${err}`);
  }
}
