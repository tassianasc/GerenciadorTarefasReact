// Componente responsável pela interface de gerenciamento de tarefas (exibição, adição, atualização, exclusão)
import React, { useState, useEffect } from 'react';
import api from '../services/api';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Carregar as tarefas ao montar o componente
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

  const addTask = async () => {
    if (!newTask.trim()) return; // Evita tarefas vazias
    try {
      const response = await api.post('/tasks', { title: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      const response = await api.put(`/tasks/${id}`, { completed: !completed });
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

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
                cursor: 'pointer',
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
}

export default TaskList;
