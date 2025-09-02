const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

app.use(express.json());

// Caminho para o arquivo no "banco de dados"
const dbPath = "./estudantes.json";

// --- Funções Auxiliares para ler e salvar no arquivo ---

function lerDados() {
  if (!fs.existsSync(dbPath)) {
    return [];
  }
  const dadosJson = fs.readFileSync(dbPath, "utf-8");
  if (!dadosJson) {
    return [];
  }
  return JSON.parse(dadosJson);
}

function salvarDados(dados) {
  const dadosJson = JSON.stringify(dados, null, 2);
  fs.writeFileSync(dbPath, dadosJson);
}

// --- Rotas da API ---

app.get("/estudantes", (req, res) => {
  const instrucoes = `
        API de Livros:
        - GET /estudantes/listar: Para listar os estudantes existentes.
        - POST /estudantes: Para adicionar um novo estudante (enviar dados em JSON).
        - DELETE /estudantes/:id: Para deletar um estudante pela matricula.
        - PUT /estudantes/:id: Para atualizar um estudante pela matricula.
    `;
  res.type("text/plain").send(instrucoes);
});
-
app.get("/estudantes/listar", (req, res) => {
  const estudantes = lerDados();
  res.status(201).json(estudantes);
});

app.post("/estudantes", (req, res) => {
  const { nome, curso, ano } = req.body;

  if (!nome || !curso || !ano) {
    return res
      .status(400)
      .json({
        message: "Todos os campos (nome, curso, ano) são obrigatórios.",
      });
  }

  const novoEstudante = {
    matricula: Date.now(),
    nome,
    curso,
    ano,
  };


  const estudantes = lerDados();

  estudantes.push(novoEstudante);

  salvarDados(estudantes);

  res.status(201).send(`Estudante "${novoEstudante.nome}" adicionado`);
});

app.delete("/estudantes/:matricula", (req, res) => {
  const matriculaParaDeletar = Number(req.params.matricula);
  const estudantes = lerDados();

  const estudanteIndex = estudantes.findIndex(
    (estudante) => estudante.matricula === matriculaParaDeletar
  );

  if (estudanteIndex === -1) {
    return res
      .status(404)
      .json({
        message: "Estudantes não encontrado com a matricula fornecida.",
      });
  }

  estudantes.splice(estudanteIndex, 1);

  salvarDados(estudantes);

  res.status(200).send("Estudante deletado com sucesso!");
});

app.patch("/estudantes/:matricula", (req, res) => {
    try {
        
      const matricula = Number(req.params.matricula);
      const atualizacoes = req.body;

      const estudantes = lerDados();

      const estudanteIndex = estudantes.findIndex(estudante => estudante.matricula === matricula);

      if (estudanteIndex === -1) {
        return res.status(404).json({ message: "Estudante não encontrado." });
      }

      const estudanteOriginal = estudantes[estudanteIndex];
      const estudanteAtualizado = {
          ...estudanteOriginal,
          ...atualizacoes,
          matricula: estudanteOriginal.matricula
      };

      estudantes[estudanteIndex] = estudanteAtualizado;

      salvarDados(estudantes);
  
      res.status(200).send(`Estudante ${estudanteAtualizado.nome} atualizado com sucesso`);
      
    } catch (error) {
      res.status(500).send(error.message);
    }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
