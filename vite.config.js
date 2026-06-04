import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        projects: resolve(__dirname, 'projects.html'),
      },
    },
  },
});
