import axios from 'axios';

export const apiTask = axios.create({
  //baseURL: 'https://royal-api-desenvolvimento.sete.digital/api',
  baseURL: 'http://localhost:3001/api',
});
