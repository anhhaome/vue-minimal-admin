# Rugo Vue

## Usage

Step 1. Install your normal Vue application, by:

```bash
npm init vue@latest
```

Step 2. Install Rugo Vue library.

```bash
npm install --save-dev @rugo-vn/vue@beta
```

Step 3. Install Tailwind CSS

[https://tailwindcss.com/docs/guides/vite#vue](https://tailwindcss.com/docs/guides/vite#vue)

Step 4. Config theme

```js
import { createTheme } from '@rugo-vn/vue';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: createTheme({
    size: 'normal',
    color: 'base',
    font: 'basic',
  }),
  plugins: [],
};
```

Step 5. Import and use it directly in your code.

```vue
<script setup>
import { RHeading } from '@rugo-vn/vue';
</script>

<template>
  <RHeading>Rugo Vue</RHeading>
</template>
```

## Scripts

| Namespace | Script  | Detail                  |
| --------- | ------- | ----------------------- |
|           | dev     | Develop the library     |
| example   |         | Example project         |
|           | make    | Make an example project |
|           | run     | Run example project     |
| publish   |         | Npm publishing scripts  |
|           | release | Lastest releasing       |
|           | beta    | Beta releasing          |

## License

MIT.
