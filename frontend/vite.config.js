import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: env.VITE_BACKEND_URL || 'http://localhost:5000',
      },
    },
  },
}); 
