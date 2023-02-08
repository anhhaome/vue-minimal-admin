# Rugo Vue

@rugo-vn/vue

## Usage

### Vue 3

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
npm install -D tailwindcss postcss autoprefixer animate.css @rugo-vn/vue
npx tailwindcss init -p
```

4. Config TailwindCSS content in `tailwind.config.[js|cjs]`

```js
const colors = require('tailwindcss/colors');

// delete unsupported colors
delete colors.lightBlue;
delete colors.warmGray;
delete colors.coolGray;
delete colors.blueGray;
delete colors.trueGray;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/@rugo-vn/vue/dist/**/*.js',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
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
      sans: ['PoppinsVN', 'sans-serif'],
      mono: ['"Fira Code"'],
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
      '7xl': '5rem',
    },
  },
  plugins: [require('@rugo-vn/vue/dist/plugin.[js|cjs]')],
};
```

5. Create `./src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Import CSS and plugin in `./src/main.js`:

```js
import { createApp } from 'vue';
import RugoVue from '@rugo-vn/vue';

import App from './App.vue';

import '@rugo-vn/vue/dist/index.css';
import './index.css';

const app = createApp(App);

app.use(RugoVue);

app.mount('#app');
```

7. Copy assets:

```bash
cp -r ./node_modules/@rugo-vn/vue/dist/assets ./public
cp ./node_modules/@rugo-vn/vue/dist/index.html ./index.html
```

### Nuxt 3

1. Create your own Nuxt 3 project:

```bash
npx nuxi init <your-project>
cd <your-project>
npm install
```

2. Add `type` to `package.json`:

```json
{
  "type": "module"
}
```

3. Install TailwindCSS and more packages:

```bash
npm install -D tailwindcss postcss@latest autoprefixer@latest animate.css @rugo-vn/vue
npx tailwindcss init -p
```

4. Config TailwindCSS content in `tailwind.config.[js|cjs]`

(Same as previous Vue 3 article).

5. Create `./assets/css/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Create `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

7. Import files in `nuxt.config.ts`

```js
export default {
  css: ['@/assets/css/main.css', '@rugo-vn/vue/dist/index.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
};
```

8. Create a `plugins/rugo.js` plugin.

```js
import RugoVue from '@rugo-vn/vue/dist/library.mjs';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(RugoVue);
});
```

9. Run your code

```bash
npm run dev -- -o
```

## Docs

### About

All of components using `R` character as prefix.

### Layers

- `0` - Background.
- `50` - RScreenLoader.

### Components

- [RButton](./docs/r-button.md)
- [RCentralLayout](./docs/r-central-layout.md)
- [RCheckbox](./docs/r-checkbox.md)
- [RDialog](./docs/r-dialog.md)
- [RHeading](./docs/r-heading.md)
- [RIcon](./docs/r-icon.md)
- [RInput](./docs/r-input.md)
- [RPanel](./docs/r-panel.md)
- [RSideNav](./docs/r-side-nav.md)
- [RTopBar](./docs/r-top-bar.md)

## License

MIT.
