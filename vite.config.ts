import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  base: '/vue3-auth/',
  plugins: [
    vue(),
    {
      name: 'copy-index-to-404',
      closeBundle: () => {
        const indexPath = resolve(__dirname, 'dist/index.html');
        const notFoundPath = resolve(__dirname, 'dist/404.html');
        fs.copyFileSync(indexPath, notFoundPath);
      }
    }
  ],
  
})
