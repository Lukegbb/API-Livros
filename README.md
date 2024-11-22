# Book API

This is a simple RESTful API built with **Node.js** and **Express** for managing books. The API allows you to perform basic CRUD operations (Create, Read, Update, Delete) on a collection of books.

Este é um simples API RESTful criada com **Node.js** e **Express** para gerenciar livros. A API permite realizar operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) em uma coleção de livros.

## Features / Funcionalidades

- **GET /livros**: List all books / Listar todos os livros
- **GET /livros/:id**: Get a specific book by ID / Obter um livro específico por ID
- **POST /livros**: Add a new book / Adicionar um novo livro
- **PUT /livros/:id**: Update a specific book / Atualizar um livro específico
- **DELETE /livros/:id**: Delete a book by ID / Deletar um livro pelo ID

## Prerequisites / Pré-requisitos

Before running this project, make sure you have the following installed:

Antes de rodar este projeto, certifique-se de ter o seguinte instalado:

- **Node.js**
- **npm**



1. Navigate into the project directory:

    Navegue até o diretório do projeto:

    ```bash
    cd book-api
    ```

2. Install the dependencies:

    Instale as dependências:

    ```bash
    npm install
    ```

3. Start the server:

    Inicie o servidor:

    ```bash
    node index.js
    ```

    The server will be running on `http://localhost:3000`. / O servidor estará rodando em `http://localhost:3000`.

## API Endpoints / Endpoints da API

### 1. **GET /livros**

This endpoint returns a list of all books.

Este endpoint retorna uma lista de todos os livros.

Example:

```bash
curl http://localhost:3000/livros
