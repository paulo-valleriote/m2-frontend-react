import axios from 'axios';

export const API_URL = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: { 'Content-Type': 'Application/json' },
  params: {
    api_key: '5faf3631a4a31badfe460ed9e3948cca',
    language: 'pt-BR'
  }
});