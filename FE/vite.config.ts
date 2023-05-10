import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
// import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/Components') },
      { find: '@store', replacement: path.resolve(__dirname, './src/Store') },
      { find: '@api', replacement: path.resolve(__dirname, './src/Api') },
      { find: '@util', replacement: path.resolve(__dirname, './src/Util') },
    ],
  },
});
