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
- GET	/	Retorna todas as tarefas
- POST	/	Cria uma nova tarefa
- PUT	/:id	Atualiza o status de uma tarefa
- DELETE	/:id	Deleta uma tarefa
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
# Conteúdo Exame Final: 
---
# 1. React.js (criação)
- O frontend foi construído utilizando **React.js** desde o início, usando o **Create React App** para criar a estrutura básica do projeto.
- Componentes React foram usados, como o TaskList, para criar e gerenciar a interface.
- O projeto utiliza **JSX** para definir a interface de maneira declarativa.
**Exemplos no projeto:**

- O arquivo App.js importa e utiliza o componente TaskList:
```
import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <TaskList />
    </div>
  );
}

export default App;
```
- A aplicação foi estruturada para incluir rotas no backend, consumidas pelo frontend usando o cliente HTTP **Axios.**
---
# 2. Teoria de React com Hooks
- O projeto usa React Hooks como useState e useEffect para gerenciar estado e ciclo de vida.
**Exemplos no projeto:**

1. **Gerenciamento de estado com useState:**

- No componente TaskList, useState é usado para gerenciar o estado das tarefas e da nova tarefa.

```
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState('');
```
**Efeitos colaterais com useEffect:**

- O useEffect é usado para carregar as tarefas do backend quando o componente é montado.
  
```
useEffect(() => {
  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };
  fetchTasks();
}, []);
```
**Teoria abordada:**

- O projeto exemplifica como os hooks substituem as antigas classes no React, tornando o código mais simples e funcional.
---
# 3. Node.js com Express
- O backend foi desenvolvido usando Node.js e o framework Express para criar uma API RESTful.
- Inclui rotas para CRUD (Create, Read, Update, Delete) que interagem com o MongoDB.
**Exemplos no projeto:**

- A API no arquivo taskRoutes.js:

```
router.post('/', async (req, res) => {
  const { title } = req.body;
  const newTask = await Task.create({ title });
  res.status(201).json(newTask);
});

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});
```
- Configuração do servidor no server.js:

```
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/tasks', taskRoutes);

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));

```
---
# 4. MongoDB
- O banco de dados MongoDB foi utilizado para armazenar as tarefas. O projeto inclui o uso do Mongoose para modelagem e interação com o banco.
**Exemplos no projeto:**

- O arquivo task.js define o modelo de dados:

```
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);

```
- As operações com o banco (inserção, leitura, atualização e exclusão) são implementadas usando métodos do Mongoose.
---
# Resumo

![Screenshot_171](https://github.com/user-attachments/assets/bcf7a6f8-8696-4ccc-9568-cae5b8346af4)

Este projeto é um exemplo completo de integração entre frontend (React) e backend (Node.js com Express e MongoDB).
---
# Como o MVC foi usado no Projeto
O projeto implementa o padrão MVC com a separação clara entre as camadas:

## 1. Model
No projeto, o arquivo task.js em backend/models/ representa o Model.
Ele define como as tarefas são estruturadas no banco de dados e como serão manipuladas.
**Exemplo:**

```
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);

```
- Este modelo é usado pelo **Controller** para criar, buscar, atualizar e excluir dados no MongoDB.
---
## 2. Controller
As rotas definidas em backend/routes/taskRoutes.js atuam como os **Controllers** do projeto.
Elas gerenciam as requisições HTTP (GET, POST, PUT, DELETE), utilizam o **Model** para manipular os dados e retornam as respostas para o frontend.
**Exemplo:**
```
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = await Task.create({ title });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

```
- Aqui, o Controller:
1. Recebe uma requisição POST para criar uma nova tarefa.
2. Usa o Model Task para inserir os dados no MongoDB.
3. Retorna a resposta ao cliente (frontend).
---
## 3. View
- A interface do usuário, construída com React.js, representa a View no projeto.
- O componente TaskList.js exibe as tarefas para o usuário e envia interações (como adicionar ou concluir tarefas) para o backend por meio de chamadas à API.
**Exemplo:**
```
return (
  <div>
    <h1>Gerenciador de Tarefas</h1>
    <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Nova tarefa"
    />
    <button onClick={addTask}>Adicionar</button>
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
            onClick={() => toggleTask(task._id, task.completed)}
          >
            {task.title}
          </span>
          <button onClick={() => deleteTask(task._id)} style={{ marginLeft: '10px' }}>
            Deletar
          </button>
        </li>
      ))}
    </ul>
  </div>
);

```
- A View:
1. Exibe as tarefas.
2. Permite ao usuário adicionar, marcar ou excluir tarefas.
3. Chama as rotas do backend (Controller) via Axios.
---
**Resumo do Padrão MVC no Projeto**
---
![Screenshot_172](https://github.com/user-attachments/assets/b9ad86cd-f3cc-4024-bc94-04f359da2483)
---
Essa implementação separa claramente as responsabilidades, permitindo que o código seja mais organizado, fácil de entender e de manter.




  
