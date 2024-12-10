//Contém as rotas para criação, leitura, atualização e exclusão de tarefas (CRUD).
const express = require('express');
const Task = require('../models/task');

const router = express.Router();

// Criar uma nova tarefa
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = await Task.create({ title });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar tarefa
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { completed },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deletar tarefa
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).send('Tarefa deletada.');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
