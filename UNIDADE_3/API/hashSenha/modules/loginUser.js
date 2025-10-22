import MUser from '../models/schemaUser.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export async function loginUser(req, res) {
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];

if (!token) {
  return res.status(403).json({ error: 'Token não fornecido.' });
}

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    const user = await MUser.findOne({ email });

    const validPassword = user ? await bcrypt.compare(password, user.password) : false;

    if (!user || !validPassword) {
      return res.status(401).json({ error: 'Email ou senha inválidos.' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login realizado com sucesso!', token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
  }
}