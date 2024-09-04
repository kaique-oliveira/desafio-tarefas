import axios from 'axios';

export const apiTask = axios.create({
  baseURL: 'https://fdf7-159-89-239-199.ngrok-free.app/api',
  //baseURL: 'http://localhost:3001/api',
});
