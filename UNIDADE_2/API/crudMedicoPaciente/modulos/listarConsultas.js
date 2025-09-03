import { lerDadosConsultas } from "../index.js";

export function listarConsultas(req, res) {
  const consultas = lerDadosConsultas();
  
  const { IDconsulta, data, CRM, ID, descricao } = req.query;

  if (!IDconsulta && !CRM && !data && !ID && !descricao) {
    return res.status(200).json(consultas);
  }

const consultasFiltradas = consultas.filter(medico => {
    const correspondeCRM = !CRM || medico.CRM.toLowerCase().includes(CRM.toLowerCase());

    const correspondeData = !data || medico.data.toLowerCase().includes(data.toLowerCase());

    const correspondeIDconsulta = !IDconsulta || medico.IDconsulta.toLowerCase().includes(IDconsulta.toLowerCase());

    const correspondeID = !ID || medico.ID.toLowerCase().includes(ID.toLowerCase());

    const correspondeDescricao = !descricao || medico.descricao.toLowerCase().includes(descricao.toLowerCase());

    return correspondeData && correspondeCRM && correspondeIDconsulta && correspondeID && correspondeDescricao;
  });

  // 5. Retorna a lista filtrada
  res.status(200).json(consultasFiltradas);
}