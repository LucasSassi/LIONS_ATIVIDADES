// import MUser from "../models/schemaUser.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import { ensureValidPayload } from "./user.service.js";

// export async function loginUser(req, res) {
//   try {
//     ensureValidPayload(data);

//     const user = await MUser.findOne({ email });

//     const validPassword = user
//       ? await bcrypt.compare(password, user.password)
//       : false;

//     if (!user || !validPassword) {
//       return res.status(401).json({ error: "Email ou senha inválidos." });
//     }

//     const token = jwt.sign(
//       { userId: user._id, role: user.Role },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "1h",
//       }
//     );

//     res.json({ message: "Login realizado com sucesso!", token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Ocorreu um erro interno no servidor." });
//   }
// }
