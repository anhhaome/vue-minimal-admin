import { createTheme } from '@rugo-vn/vue/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './lib/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@rugo-vn/vue/lib/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: createTheme({
    size: 'normal',
    color: 'base',
    font: 'basic'
  }),
  plugins: []
};
