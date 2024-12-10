//Configura o cliente Axios para comunicação com o backend.
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Certifique-se de que o backend está rodando nesta porta
});

export default api;
