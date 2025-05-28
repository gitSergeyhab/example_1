// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path'; // Не забудьте импортировать 'path'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//         @import "@/styles/_variables.scss";
//         @import "@/styles/_mixins.scss";
//       `,
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Не забудьте импортировать 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use 'sass:color';
        @use "@/styles/variables" as *;
        @use "@/styles/mixins" as *;
      `,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
