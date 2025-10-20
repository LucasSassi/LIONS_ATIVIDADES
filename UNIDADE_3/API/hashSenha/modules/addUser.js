import bcrypt from 'bcrypt';
import MUser from "../models/schemaUser.js";

export async function addUser(req, res) {
    try {
        const dados = req.body;

        const userExists = await MUser.findOne({ email: dados.email });
        
        if (userExists) {
            return res.status(409).json({ message: "Este email já está cadastrado." });
        }

        const hashSenha = await bcrypt.hash(dados.senha, 12);
        
        const newUser = await MUser.create({
            ...dados,
            senha: hashSenha
        });

        return res.status(201).json(newUser);

    } catch (err) {
        console.error(`O erro é: ${err}`);
        
        return res.status(500).json({ 
            message: "Não foi possível criar o usuário.",
            error: err.message
        });
    }
}