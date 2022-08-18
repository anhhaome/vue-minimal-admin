# Rugo Vue

@rugo-vn/vue

## About

All of components using `R` character as prefix.

## Usage

1. Create your own Vue 3 project:

```bash
npm init vue@latest
cd <your-project>
npm i
```

2. Add `type` to `package.json`:

```json
{
  "type": "module"
}
```

3. Install TailwindCSS and more packages:

```bash
npm install -D tailwindcss postcss autoprefixer animate.css
npx tailwindcss init -p
```

4. Config TailwindCSS content in `tailwind.config.[js|cjs]`

```js
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/@rugo-vn/vue/dist/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: colors.cyan,
      secondary: colors.stone,
      danger: colors.rose,
      info: colors.indigo,
      warn: colors.amber,
      success: colors.emerald,
      ...colors,
    },
    fontFamily: {
      sans: ["PoppinsVN", "sans-serif"],
      mono: ['"Fira Code"'],
    },
    extend: {},
    fontSize: {
      xs: ".75rem",
      sm: ".825rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [
    require('@rugo-vn/vue/dist/plugin.[js|cjs]')
  ],
}
```

5. Create `./src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Import CSS:

```js
import { createApp } from 'vue'
import App from './App.vue'

import '@rugo-vn/vue/dist/index.css'
import './index.css'

createApp(App).mount('#app')
```

7. Copy assets:

```bash
cp -r ./node_modules/@rugo-vn/vue/dist/assets ./public
cp ./node_modules/@rugo-vn/vue/dist/index.html ./index.html
```

## License

MIT.
