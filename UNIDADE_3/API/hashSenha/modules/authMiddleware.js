import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'Token não fornecido' });
  const Auth = token.startsWith('Bearer ') ? token.slice(7) : token

  try {
    const decoded = jwt.verify(Auth, process.env.JWT_SECRET );
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}