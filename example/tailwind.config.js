import { createTheme } from '@rugo-vn/vue/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: createTheme({
    size: 'normal',
    color: 'base',
    font: 'basic',
  }),
  plugins: [],
};
