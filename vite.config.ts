import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url'; // Use `url` module for `__dirname` equivalent

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Correct alias setup
    },
  },
  server: {
    port: 5173, // Optional: Customize the development server port
  },
});
