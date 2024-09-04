import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acesso externo
    port: 3000, // Define a porta que o servidor irá escutar
  },
  preview: {
    host: '0.0.0.0', // Permite acesso externo no modo preview
    port: 3000, // Define a porta que o servidor irá escutar no modo preview
  },
});
