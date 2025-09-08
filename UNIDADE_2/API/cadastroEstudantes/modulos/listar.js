import { lerDados } from "../index.js";

export function listar(req, res) {
  const estudantes = lerDados();
  
  const { nome, ano, matricula, curso } = req.query;

  if (!nome && !ano && !matricula && !curso) {
    return res.status(200).json(estudantes);
  }

  const estudantesFiltrados = estudantes.filter(estudante => {
    const correspondeNome = !nome || estudante.nome.toLowerCase().includes(nome.toLowerCase());
    const correspondeAno = !ano || estudante.ano.toString() === ano;
    const correspondeMatricula = !matricula || estudante.matricula.toString() === matricula;
    const correspondeCurso = !curso || estudante.curso.toLowerCase().includes(curso.toLowerCase());

    return correspondeNome && correspondeAno && correspondeMatricula && correspondeCurso;
  });

  // 5. Retorna a lista filtrada
  res.status(200).json(estudantesFiltrados);
}