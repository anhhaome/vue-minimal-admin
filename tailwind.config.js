import { createTheme } from './lib/theme.js';

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
