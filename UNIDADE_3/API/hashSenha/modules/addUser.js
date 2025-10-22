import bcrypt from "bcrypt";
import MUser from "../models/schemaUser.js";

export async function addUser(req, res) {
  try {
    const { email, password, ...outrosDados } = req.body;

    if (!password || typeof password !== "string" || password.trim() === "") {
      return res.status(400).json({
        message: "O campo 'password' é obrigatório e não pode ser vazio.",
      });
    }

    const userExists = await MUser.findOne({ email: email });
    if (userExists) {
      return res
        .status(409)
        .json({ message: "Este email já está cadastrado." });
    }

    // Se a validação passou, agora é seguro usar a variável 'senha'
    const hashSenha = await bcrypt.hash(password, 12);

    const newUser = await MUser.create({
      email,
      ...outrosDados,
      password: hashSenha,
    });

    return res.status(201).json({ User: newUser });
  } catch (err) {
    console.error(`O erro é: ${err}`);
    return res.status(500).json({
      message: "Não foi possível criar o usuário.",
      error: err.message,
    });
  }
}
