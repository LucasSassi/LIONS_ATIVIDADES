import MEstudante from '../../schemaEstudantes.js';

export async function listarEstudantes(req, res) {
  try {
    const estudantes = await MEstudante.find();

    res.status(200).json(estudantes);
    
  } catch (error) {
    console.error("Erro ao listar estudantes:", error);
    res.status(500).json({ message: "Ocorreu um erro no servidor." });
  }
}