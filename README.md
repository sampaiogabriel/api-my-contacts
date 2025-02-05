# 📞 API My Contacts  

Uma API RESTful desenvolvida em **Node.js** e **Express** para gerenciar contatos, permitindo operações como criação, leitura, atualização e exclusão de contatos (CRUD).  

## 🚀 Tecnologias Utilizadas  

- **Node.js** – Ambiente de execução JavaScript no backend  
- **Express.js** – Framework minimalista para criação da API  
- **PostgreSQL** – Banco de dados relacional para armazenamento dos contatos  
- **Knex.js** – Query builder para facilitar interações com o banco  
- **Joi** – Validação de dados de entrada  
- **Cors** – Controle de acessos entre domínios  
- **Dotenv** – Gerenciamento de variáveis de ambiente  

## 📌 Funcionalidades  

- ✅ Cadastro de contatos com nome, e-mail e telefone  
- ✅ Listagem de todos os contatos  
- ✅ Busca de contato por ID  
- ✅ Atualização de informações do contato  
- ✅ Exclusão de contatos  
- ✅ Validação de dados antes da inserção  

## 🔧 Como Executar  

1. Clone este repositório:  
   ```bash
   git clone https://github.com/sampaiogabriel/api-my-contacts.git
   cd api-my-contacts
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente (`.env`):  
   ```env
   DATABASE_URL=postgres://usuario:senha@localhost:5432/mycontacts
   ```

4. Execute as migrações do banco de dados:  
   ```bash
   npx knex migrate:latest
   ```

5. Inicie o servidor:  
   ```bash
   npm start
   ```

6. Acesse a API em:  
   ```
   http://localhost:3000
   ```

## 📖 Rotas da API  

### 🔹 Criar um contato  
- **POST** `/contacts`  
- **Body:**  
  ```json
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "(11) 99999-9999"
  }
  ```
- **Resposta:**  
  ```json
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "(11) 99999-9999"
  }
  ```

### 🔹 Listar todos os contatos  
- **GET** `/contacts`  

### 🔹 Buscar contato por ID  
- **GET** `/contacts/:id`  

### 🔹 Atualizar contato  
- **PUT** `/contacts/:id`  
- **Body:** (enviar apenas os campos que deseja alterar)  
  ```json
  {
    "name": "João Pedro Silva"
  }
  ```

### 🔹 Excluir contato  
- **DELETE** `/contacts/:id`  

## 📝 Licença  

Este projeto está sob a licença **MIT**.  

