import axios from 'axios';

export const apiTask = axios.create({
  baseURL: 'http://159.89.239.199:3001/api',
  //baseURL: 'http://localhost:3001/api',
});
