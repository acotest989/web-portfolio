import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  // Served from a GitHub Pages project subpath, not the domain root.
  base: '/web-portfolio/',
  plugins: [react(), tailwindcss()],
});
