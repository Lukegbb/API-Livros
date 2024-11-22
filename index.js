const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Configuração do Express para aceitar JSON
app.use(cors());
app.use(express.json());

// Dados de exemplo de livros (simulando um banco de dados)
let livros = [
  { id: 1, titulo: '1984', autor: 'George Orwell', ano: 1949 },
  { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899 },
];

// 1. Listar todos os livros
app.get('/livros', (req, res) => {
  res.json(livros);
});

// 2. Obter um livro específico por ID
app.get('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const livro = livros.find(livro => livro.id === id);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
});

// 3. Adicionar um novo livro
app.post('/livros', (req, res) => {
  const { titulo, autor, ano } = req.body;
  const novoLivro = { id: livros.length + 1, titulo, autor, ano };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// 4. Atualizar um livro existente
app.put('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { titulo, autor, ano } = req.body;
  const livroIndex = livros.findIndex(livro => livro.id === id);
  
  if (livroIndex !== -1) {
    livros[livroIndex] = { id, titulo, autor, ano };
    res.json(livros[livroIndex]);
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
});

// 5. Deletar um livro
app.delete('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const livroIndex = livros.findIndex(livro => livro.id === id);
  
  if (livroIndex !== -1) {
    livros.splice(livroIndex, 1);
    res.status(204).end(); // Retorna sucesso sem conteúdo
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
