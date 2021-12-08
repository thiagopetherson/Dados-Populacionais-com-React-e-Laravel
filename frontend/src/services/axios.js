import axios from 'axios' // Importando o Axios

// https://sujeitoprogramador.com/r-api/?api=filmes/

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

export default api