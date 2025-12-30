import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',      // onde está o index.html
  build: {
    outDir: '../dist', // saída fora de public
    emptyOutDir: true
  }
});
