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

*.Crie o arquivo .env na pasta backend com o seguinte conteúdo:
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
