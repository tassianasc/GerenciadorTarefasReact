//Define o esquema de dados para o MongoDB
const mongoose = require('mongoose');

// Esquema de dados para tarefas
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

// Exportar o modelo
module.exports = mongoose.model('Task', TaskSchema);
