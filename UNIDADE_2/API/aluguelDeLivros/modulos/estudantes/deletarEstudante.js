import { lerDadosEstudantes, salvarDadosEstudantes } from "../../index.js";

export function deletarEstudantes (req, res){
  const idParaDeletar = Number(req.params.id);
  const estudantes = lerDadosEstudantes();

  const estudanteIndex = estudantes.findIndex(
    (estudante) => estudante.id === idParaDeletar
  );

  if (estudanteIndex === -1) {
    return res.status(404).json({
      message: "Estudante não encontrado com o fornecido.",
    });
  }

  estudantes.splice(estudanteIndex, 1);

  salvarDadosEstudantes(estudantes);

  res.status(200).send("Estudante deletado com sucesso!");
};