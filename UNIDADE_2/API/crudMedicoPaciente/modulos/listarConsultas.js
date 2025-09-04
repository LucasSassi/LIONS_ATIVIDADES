import { lerDadosConsultas } from "../index.js";

export function listarConsultas(req, res) {
  let consultas = lerDadosConsultas();
  
  const { IDconsulta, data, CRM, ID, descricao } = req.query;

  if (!IDconsulta && !CRM && !data && !ID && !descricao) {
    return res.status(200).json(consultas);
  }

const consultasFiltradas = consultas.filter((elemento)  => {
    const correspondeCRM = !CRM || (elemento.CRM === parseInt(CRM) ? elemento.CRM : false) 

    const correspondeData = !data || elemento.data.toLowerCase().includes(data.toLowerCase());

    const correspondeIDconsulta = !IDconsulta || elemento.IDconsulta.toLowerCase().includes(IDconsulta.toLowerCase());

    const correspondeID = !ID || (elemento.ID === parseInt(ID) ? elemento.ID : false) 

    const correspondeDescricao = !descricao || elemento.descricao.toLowerCase().includes(descricao.toLowerCase());

    return correspondeData && correspondeCRM && correspondeIDconsulta && correspondeID && correspondeDescricao;
  });

  // 5. Retorna a lista filtrada
  res.status(200).json(consultasFiltradas);
}