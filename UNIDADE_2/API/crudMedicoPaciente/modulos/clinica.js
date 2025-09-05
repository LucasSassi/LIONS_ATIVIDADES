export function DadosDaAPI(req, res) {
  res.send(
    "ROTAS\n/clinica/relatorios/medicos/:CRM p/ gerar um relatorio das consultas de um medico\n/clinica/adicionar/medicos p/ adicionar um medico\n/clinica/adicionar/pacientes p/ adicionar um paciente\n/clinica/adicionar/consultas p/ adicionar uma consulta\n/clinica/listar/medicos p/ listar os medicos\n/clinica/listar/pacientes p/ listar os pacientes\n/clinica/listar/consultas p/ listar as consultas\n/clinica/deletar/medicos/:CRM p/ deletar um medico\n/clinica/deletar/pacientes/:ID p/ deletar um paciente\n/clinica/deletar/consultas/:IDconsulta p\ deletar uma consulta\n/clinica/atualizar/medicos/:CRM p\ atualizar um medico\n/clinica/atualizar/pacientes/:ID p/ deletar um paciente\n"
  );
}
