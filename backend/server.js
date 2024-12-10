// Arquivo principal que configura o servidor Express, conecta ao MongoDB e registra as rotas
require('dotenv').config(); // Carrega variáveis de ambiente do .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000; // Usa porta do .env ou 5000 como padrão

// Middleware
app.use(express.json());
app.use(cors()); // Permite comunicação com o frontend

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/tasks', taskRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
