# API Para Genrenciamento De Biblioteca

Esta API foi desenvolvida como parte de um trabalho acadêmico do curso de Desenvolvimento de Sistemas do Rio Pomba Valley – Grupo Energisa em parceria com SENAI Cataguases.
O projeto foi elaborado para a disciplina de Banco de Dados, lecionada pelo professor Daniel V. Almeida, com o objetivo de aplicar os conceitos estudados de forma prática.

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor  
- **Fastify** – Framework web para criação de APIs rápidas e leves  
- **MongoDB** – Banco de dados NoSQL utilizado para armazenar as informações  
- **Dotenv** – Gerenciamento de variáveis de ambiente  

## Scripts do projeto

Atualmente, o projeto conta com três scripts principais:

- ```npm run dev```         (Inicia o servidor da aplicação.)

- ```npm run dev:watch```   (Inicia o servidor e monitora o código-fonte, reiniciando automaticamente a cada alteração detectada.)

- ```npm run collections``` (Remove e recria todas as coleções do banco de dados definido na variável de ambiente MONGO_DATABASE_NAME)

## Endpoints

Todos os endpoints da API estão documentados no arquivo routes.http.
Abaixo está uma breve descrição de cada um:

#### Para Usuários

- ``POST /users`` - Cadastra um Usuário: Cria um novo usuário no banco de dados.
- ``GET  /users`` - Lista todos os usuários: Retorna uma lista com todos os usuários cadastrados.

#### Para Autores

- ``POST /authors`` - Cadastra um Autor: Cria um novo autor no banco de dados.
- ``GET  /authors`` - Lista todos os autores: Retorna uma lista com todos os autores cadastrados.

#### Para Livros
- ``POST /books`` - Cadastra um Livro: Cria um novo livro, associando-o a um autor existente.
- ``GET  /books`` - Lista todos os livros: Retorna uma lista com todos os livros cadastrados.

#### Para Empréstimos
- ``POST /loans`` - Realizar Empréstimo: Cria um registro de empréstimo, obedecendo as regras de negócio impostas em código!

## Como Se Conectar

Em uma sequência de passos você aprenderá a iniiar a aplicação:
1. **Configurar o ambiente:** 
Renomeie o arquivo ``.env.example`` para ``.env`` e preencha as variáveis de ambiente conforme sua configuração local.

2. **Instalar as dependências:**
Execute o comando: ``npm install`` ou simplesmente ``npm i``

3. **Iniciar o servidor:**
Utilize um dos comandos descritos na seção **Scripts do Projeto**.

## Regras de Negócio

1. **Usuários:**
    - Não é permitido cadastrar usuários com nomes duplicados.

2. **Autores:**
    - Não é permitido cadastrar autores com nomes duplicados.
    - O campo `writingGenre` deve conter um dos seguintes valores:
        - Novel
        - Poetry
        - Fantasy
        - Fiction
        - Mystery
        - Suspense

3. **Livros:**
    - Cada livro deve estar associado a um autor existente.
    - Quando um livro é emprestado:
        - O campo `isAvailable` passa a ser `false`.
        - O campo `expectedReturnDate` é definido para 3 dias após a data do empréstimo.

4. **Empréstimos:**
    - Verificar se o livro está disponível (`isAvailable = true`) antes do empréstimo.
    - Se o livro estiver indisponível, mas o `expectedReturnDate` for anterior à data atual, o empréstimo pode ser realizado.
    - Ao confirmar um empréstimo:
        - Criar um novo documento em `Loans` com as informações do usuário, livro e datas.
        - Atualizar o status do livro para `isAvailable = false`.
        - Definir `expectedReturnDate` para 3 dias após a data atual.
    - Se o livro estiver emprestado e ainda dentro do prazo (`expectedReturnDate` > data atual), o sistema deve negar o empréstimo.
