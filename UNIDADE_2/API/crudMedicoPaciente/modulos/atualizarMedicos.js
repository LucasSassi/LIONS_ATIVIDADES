import { lerDadosMedicos, salvarDadosMedicos } from "../index.js";

export function atualizarMedico(req, res) {
  try {
    const CRM = Number(req.params.CRM);
    const { nome, especialidade } = req.body;

    if (!nome || !especialidade) {
      return res.status(400).json({
        message:
          "Para o método PUT, todos os campos (nome e especialidade) são obrigatórios.",
      });
    }

    const medicos = lerDadosMedicos();
    const medicosIndex = medicos.findIndex(
      (medico) => medico.CRM === CRM
    );

    if (medicosIndex === -1) {
      return res.status(404).send("Médico não encontrado.");
    }

    const medicoAtualizado = {
      CRM: CRM, // Mantemos a matrícula original da URL
      nome: nome,
      especialidade, especialidade
    };

    // A substituição no array
    medicos[medicosIndex] = medicoAtualizado;
    salvarDadosMedicos(medicos);

    res
      .status(200)
      .send(
        `Médico: ${medicoAtualizado.nome} (CRM: ${medicoAtualizado.CRM}) foi completamente substituído.`
      );
  } catch (error) {
    res.status(500).send(error.message);
  }
}
