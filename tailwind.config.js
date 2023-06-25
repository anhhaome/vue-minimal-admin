import colors from 'tailwindcss/colors'
import { createTheme } from './src/theme.js'

// delete unsupported colors
delete colors.lightBlue
delete colors.warmGray
delete colors.coolGray
delete colors.blueGray
delete colors.trueGray

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: createTheme({
    size: 'normal',
    color: 'base',
    font: 'basic'
  }),
  plugins: []
}
