import { sveltekit } from '@sveltejs/kit/vite';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 5000,
    open: true,
    host: true // Listen on all network interfaces
  },
  resolve: {
    alias: {
      '@fonts': fileURLToPath(new URL('./static/fonts', import.meta.url))
    }
  }
});
