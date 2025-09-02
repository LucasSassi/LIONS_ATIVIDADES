import { lerDados, salvarDados } from "../index.js";

export function deletar (req, res){
  const matriculaParaDeletar = Number(req.params.matricula);
  const estudantes = lerDados();

  const estudanteIndex = estudantes.findIndex(
    (estudante) => estudante.matricula === matriculaParaDeletar
  );

  if (estudanteIndex === -1) {
    return res.status(404).json({
      message: "Estudantes não encontrado com a matricula fornecida.",
    });
  }

  estudantes.splice(estudanteIndex, 1);

  salvarDados(estudantes);

  res.status(200).send("Estudante deletado com sucesso!");
};