import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/app/styles/variables.scss" as *;`,
      },
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0',
  },
});
