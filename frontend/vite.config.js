import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.VITE_BACKEND_URL': JSON.stringify(env.VITE_BACKEND_URL),
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          changeOrigin: true,
          target: env.VITE_BACKEND_URL || 'http://localhost:5000',
        },
      },
    },
  };
}); 
