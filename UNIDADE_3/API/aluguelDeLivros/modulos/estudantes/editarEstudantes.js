import { lerDadosEstudantes, salvarDadosEstudantes } from "../../index.js";

export function atualizarEstudantes(req, res) {
  try {
    const id = Number(req.params.id);
    const { nome, matricula, ano, curso } = req.body;

    if (!nome || !matricula || !ano || !curso) {
      return res
        .status(400)
        .send("Todos os campos sao obrigatorios (nome, matricula, ano e curso)");
    }

    const estudantes = lerDadosEstudantes();
    const estudantesindex = estudantes.findIndex((livro) => livro.id === id);

    if (estudantesindex === -1) {
      return res
        .status(400)
        .send("Nao foi possivel encontrar um estudante com esse id");
    }

    const estudanteAtualizado = {
      id: id,
      nome,
      matricula,
      ano,
      curso,
    };

    estudantes[estudantesindex] = estudanteAtualizado;
    salvarDadosEstudantes(estudantes);

    return res
      .status(200)
      .send(`Estudante: ${estudanteAtualizado.nome}, atualizado com sucesso`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
