const express = require('express');
const fs = require('fs'); // Necessário para interagir com arquivos
const app = express();
const port = 8080;

app.use(express.json());

// Caminho para o arquivo no "banco de dados"
const dbPath = './livros.json';

// --- Funções Auxiliares para ler e salvar no arquivo ----

function lerDados() {
    if (!fs.existsSync(dbPath)) {
        return [];
    }
    const dadosJson = fs.readFileSync(dbPath, 'utf-8');
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

app.get('/livros', (req, res) => {
    const instrucoes = `
        API de Livros:
        - GET /livros/listar: Para listar os livros existentes.
        - POST /livros: Para adicionar um novo livro (enviar dados em JSON).
        - DELETE /livros/:id: Para deletar um livro pelo ID.
        - PUT /livros/:id: Para atualizar um livro pelo ID.
    `;
    res.type('text/plain').send(instrucoes);
});

// lê do arquivo
app.get('/livros/listar', (req, res) => {
    const livros = lerDados();
    res.status(201).json(livros);
});

// lê e salva no arquivo
app.post('/livros', (req, res) => {
    const { titulo, autor, ano, genero } = req.body;

    if (!titulo || !autor || !ano || !genero) {
        return res.status(400).json({ message: 'Todos os campos (titulo, autor, ano, genero) são obrigatórios.' });
    }

    const novoLivro = {
        id: Date.now(),
        titulo,
        autor,
        ano,
        genero
    };


    const livros = lerDados(); // Lê os dados existentes


    livros.push(novoLivro);

    salvarDados(livros); // Salva o array atualizado no arquivo

    res.status(201).send(`Livro "${novoLivro.titulo}" adicionado`);
});

app.delete('/livros/:id', (req, res) => {
    const idParaDeletar = Number(req.params.id);
    const livros = lerDados();

    const livroIndex = livros.findIndex(livro => livro.id === idParaDeletar);

    if (livroIndex === -1) {
        return res.status(404).json({ message: 'Livro não encontrado com o ID fornecido.' });
    }

    livros.splice(livroIndex, 1);

    salvarDados(livros);

    res.status(200).json({ message: 'Livro deletado com sucesso!' });
});


app.patch("/livros/:id", (req, res) => {
    try {
      const id = Number(req.params.id);
      const atualizacoes = req.body;

      const livros = lerDados();

      const livroIndex = livros.findIndex(livro => livro.id === id);

      if (livroIndex === -1) {
        return res.status(404).json({ message: "Livro não encontrado." });
      }

      const livroOriginal = livros[livroIndex];
      let livroAtualizado = {
          ...livroOriginal,
          ...atualizacoes,
          id: livroOriginal.id
      };

      livros[livroIndex] = livroAtualizado;

      salvarDados(livros);
  
      res.status(200).send(`Livro ${livroAtualizado.titulo} atualizado com sucesso`);
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});