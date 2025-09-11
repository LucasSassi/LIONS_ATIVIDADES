import { lerDadosMedicos } from "../index.js";

export function listarMedicos(req, res) {
  const medicos = lerDadosMedicos();
  
  const { nome, CRM, especialidade } = req.query;

  if (!nome && !CRM && !especialidade) {
    return res.status(200).json(medicos);
  }

const medicosFiltrados = medicos.filter(medico => {
    const correspondeCRM = !CRM || (medico.CRM === parseInt(CRM) ? medico.CRM : false)   

    const correspondeNome = !nome || medico.nome.toLowerCase().includes(nome.toLowerCase());

    const correspondeEspecialidade = !especialidade || medico.especialidade.toLowerCase().includes(especialidade.toLowerCase());

    return correspondeNome && correspondeCRM && correspondeEspecialidade;
  });

  // Retorna a lista filtrada 
  res.status(200).json(medicosFiltrados);
} 