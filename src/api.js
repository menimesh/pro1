import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/', // The URL for your .NET backend
});

export default api;
