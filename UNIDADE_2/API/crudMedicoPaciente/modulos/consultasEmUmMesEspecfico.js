import { lerDadosConsultas } from "../index.js";

// Função ajustada para usar req.params
export function ConsultasPorMes(req, res) {
  const { ano, mes } = req.params;

  if (!mes || !ano) {
    return res.status(400).send("É necessário informar o ano e o mês na URL.");
  }

  const mesNumero = parseInt(mes, 10);
  const anoNumero = parseInt(ano, 10);
  const consultas = lerDadosConsultas();

  const consultasFiltradas = consultas.filter(consulta => {
    const partesData = consulta.data.split('/');
    const mesDaConsulta = parseInt(partesData[1], 10);
    const anoDaConsulta = parseInt(partesData[2], 10);
    return mesDaConsulta === mesNumero && anoDaConsulta === anoNumero;
  });

  if (consultasFiltradas.length > 0) {
    res.status(200).json(consultasFiltradas);
  } else {
    res.status(404).send(`Nenhuma consulta encontrada para ${mes}/${ano}.`);
  }
}