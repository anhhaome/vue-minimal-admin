# Rugo Vue

## Installation

Install Vue 3.

Install TailwindCSS.

Install Rugo Vue

```bash
npm i -D @rugo-vn/vue
```

Import CSS into your `style.css`.

```css
@import '/node_modules/@rugo-vn/vue/src/style.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

/* others */
```

Replace `tailwind.config.js` file by:

```js
import colors from 'tailwindcss/colors'

// delete unsupported colors
delete colors.lightBlue
delete colors.warmGray
delete colors.coolGray
delete colors.blueGray
delete colors.trueGray

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@rugo-vn/vue/src/**/*.{vue,js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: colors.cyan,
      secondary: colors.stone,
      danger: colors.rose,
      info: colors.indigo,
      warn: colors.amber,
      success: colors.emerald,
      ...colors
    },
    fontFamily: {
      sans: ['PoppinsVN', 'sans-serif'],
      mono: ['"Fira Code"']
    },
    extend: {},
    fontSize: {
      xs: '.75rem',
      sm: '.825rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    }
  }
}
```

Copy assets:

```bash
cp -r ./node_modules/@rugo-vn/vue/dist/assets ./public
cp ./node_modules/@rugo-vn/vue/index.html ./index.html
```
