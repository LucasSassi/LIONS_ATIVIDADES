import { lerDadosConsultas, salvarDadosConsultas } from "../index.js";

export function adicionarConsulta(req, res) {
  const { data, CRM, ID, descricao } = req.body;

  if (!data || !CRM || !ID || !descricao) {
    return res
      .status(400)
      .send(
        "Todos os campos (data, CRM do médico, ID do paciente e descrição) são obrigatórios."
      );
  }

  const novaConsulta = {
    IDconsulta: Date.now(),
    data,
    CRM,
    ID,
    descricao,
  };

  const consultas = lerDadosConsultas();

  consultas.push(novaConsulta);

  salvarDadosConsultas(consultas);

  res.status(201).send(`Consulta "${novaConsulta.descricao}" adicionada`);
}
