import { lerDados, salvarDados } from "../index.js";

// explicando o metodo PUT
export function editar (req, res){
  try {
    const matricula = Number(req.params.matricula);
    // O corpo da requisição agora deve conter o objeto COMPLETO
    const { nome, curso, ano } = req.body;

    // MUDANÇA 1: Validação Completa
    // Com PUT, o cliente é OBRIGADO a enviar todos os campos.
    if (!nome || !curso || !ano) {
      return res.status(400).json({
        message:
          "Para o método PUT, todos os campos (nome, curso, ano) são obrigatórios.",
      });
    }

    const estudantes = lerDados();
    const estudanteIndex = estudantes.findIndex(
      (estudante) => estudante.matricula === matricula
    );

    if (estudanteIndex === -1) {
      return res.status(404).json({ message: "Estudante não encontrado." });
    }

    // MUDANÇA 2: Lógica de Substituição
    // Nós não mesclamos mais. Nós criamos um objeto totalmente novo com os dados recebidos.
    const estudanteAtualizado = {
      matricula: matricula, // Mantemos a matrícula original da URL
      nome: nome,
      curso: curso,
      ano: ano,
    };

    // A substituição no array acontece aqui
    estudantes[estudanteIndex] = estudanteAtualizado;
    salvarDados(estudantes);

    res.status(200).send(
        `Estudante ${estudanteAtualizado.nome} (matrícula ${matricula}) foi completamente substituído.`
      );
  } catch (error) {
    res.status(500).send(error.message);
  }
};