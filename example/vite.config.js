import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// eslint-disable-next-line
const base = process.env.EXAMPLE_BASE || '';

export default defineConfig({
  envPrefix: 'EXAMPLE_',

  base: `/${base}`,

  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
