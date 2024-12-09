# Gerenciador de Tarefas

## Descrição
Este é um projeto de **Gerenciador de Tarefas** simples, criado para demonstrar o uso integrado de tecnologias modernas como **Node.js**, **Express**, **MongoDB** e **React.js**. A aplicação permite realizar operações de **CRUD** (Criar, Ler, Atualizar e Deletar) de tarefas por meio de uma interface web intuitiva.

---

## Funcionalidades
- Adicionar uma nova tarefa.
- Listar todas as tarefas cadastradas.
- Marcar/desmarcar tarefas como concluídas.
- Excluir tarefas.

---

## Tecnologias Utilizadas

### **Backend**
- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework para criação de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL para armazenar as tarefas.
- **Mongoose**: Biblioteca para modelar dados no MongoDB.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **cors**: Middleware para permitir o acesso do frontend ao backend.

### **Frontend**
- **React.js**: Biblioteca para construção da interface do usuário.
- **Axios**: Cliente HTTP para comunicação com a API.

---

## Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
- **Node.js** (v16 ou superior)
- **MongoDB** (local ou remoto)
- **Git** (opcional, para controle de versão)

---

## Instalação e Execução

### **Passo 1: Clone o Repositório**
Se estiver usando o Git, execute:
```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd ProjetoFinal
```


### Passo 2: Configuração do Backend:
Navegue até o diretório backend:
```
cd backend

```
Instale as dependências:
```
npm install

```
Configure o arquivo .env com as credenciais do banco de dados:

- Crie o arquivo .env na pasta backend com o seguinte conteúdo:
```
env
MONGO_URI=mongodb:/.../projeto-final
PORT=5000
```
Inicie o servidor:

```
npm run dev
```
O backend estará rodando em http://localhost:5000.

### Passo 3: Configuração do Frontend
Navegue até o diretório frontend:
```
cd ../frontend
```
Instale as dependências:
```
npm install
```
Inicie o servidor do React:
```
npm start
```

O frontend estará disponível em http://localhost:3000.

---
## Estrutura do Projeto
# Backend
```
backend/
├── models/              # Modelos para interação com o MongoDB
│   └── task.js          # Modelo para tarefas
├── routes/              # Rotas da aplicação
│   └── taskRoutes.js    # Rotas CRUD para tarefas
├── .env                 # Variáveis de ambiente (excluído do repositório)
├── server.js            # Arquivo principal do servidor
├── package.json         # Configurações do projeto e dependências
└── node_modules/        # Dependências instaladas
```
# Frontend
```
frontend/
├── public/              # Arquivos públicos, como index.html
├── src/                 # Código fonte da aplicação React
│   ├── components/      # Componentes reutilizáveis
│   │   └── TaskList.js  # Componente principal de tarefas
│   ├── services/        # Serviços auxiliares
│   │   └── api.js       # Configuração do Axios para consumir a API
│   ├── App.js           # Componente raiz
│   ├── index.js         # Ponto de entrada do React
│   ├── App.css          # Estilos principais do App
│   └── index.css        # Estilos globais
├── package.json         # Configurações do projeto e dependências
└── node_modules/        # Dependências instaladas
```
---
## API Endpoints
# Base URL
http://localhost:5000/tasks
# Rotas
Método	Endpoint	Descrição
GET	/	Retorna todas as tarefas
POST	/	Cria uma nova tarefa
PUT	/:id	Atualiza o status de uma tarefa
DELETE	/:id	Deleta uma tarefa
# Exemplo de Corpo para POST/PUT:
```
{
  "title": "Aprender React",
  "completed": false
}
```
---
# Uso
1. Adicionar uma tarefa
- Insira o nome da tarefa no campo de texto.
- Clique no botão "Adicionar".
2. Marcar como concluída
- Clique no nome da tarefa para alternar entre concluída/não concluída.
3. Excluir uma tarefa
- Clique no botão "Deletar" ao lado da tarefa.
---


