# Vue Minimal Admin

## Demo

Visit demo at [git.anhhao.me/vue-minimal-admin](https://git.anhhao.me/vue-minimal-admin/)

## Usage

### Current Repository

Install packages.

```bash
yarn
```

Run in development mode.

```bash
yarn dev
```

Build for production.

```bash
yarn build
```

### Independent Repository

Step 1. Create a new vue js project

```bash
npm init vue@latest
```

```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … (No) / Yes
✔ Add JSX Support? … (No) / Yes
✔ Add Vue Router for Single Page Application development? … No / (Yes)
✔ Add Pinia for state management? … No / (Yes)
✔ Add Vitest for Unit testing? … No / (Yes)
✔ Add Cypress for both Unit and End-to-End testing? … No / (Yes)
✔ Add ESLint for code quality? … No / (Yes)
✔ Add Prettier for code formating? … No / (Yes)

Scaffolding project in ./<your-project-name>...
Done.
```

```bash
cd <your-project-name>
```

Step 2. Add submoudule as `lib`.

```bash
git submodule add git@github.com:anhhaome/vue-minimal-admin.git lib
```

Step 3. Install Tailwind CSS.

Below command is followed [the tutorial](https://tailwindcss.com/docs/guides/vite).

```bash 
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Inherit the library by edit `tailwind.config.js` with:

```js
const libConfig = require('./lib/tailwind.config');
const path = require('path');

module.exports = {
  darkMode: 'class',
  content: [
    ...libConfig.content.map(p => `./` + path.join('./lib', p)),
    ...libConfig.content
  ],
  theme: {
    ...libConfig.theme
  },
  plugins: [
    ...libConfig.plugins
  ],
}
```

Create a `./src/index.css` and inherit library style.

```css
```

Add this css to `./src/main.js`.

```js
import './index.css';
```

Step 4. Linking.

```bash
mkdir public/assets
ln -s ../../lib/public/assets/fonts/ ./public/assets/fonts
```

Step 5. Update `index.html`

Follow `./lib/index.html` to update your `index.html` with loader, ion-icons.

Update `vite.config.js`

```js
/* ... */

export default defineConfig({
  /* ... */
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('ion-')
        }
      }
    })
  ],
  /* ... */
});

```

Step 6. Then, install other packages.

```bash
yarn add -D uniqid dexie indexeddb-export-import animate.css axios pluralize sass-loader sass @vueup/vue-quill@beta
yarn
```

Step 7. Finally

Run:

```bash
yarn dev
```

or build:

```bash
yarn build
```

## Api

Layout Components:

- MAuthLayout
- MDashboardLayout

Common Components:

- MAlert
- MBreadcrumb
- MButton
- MConfirmDialog
- MDialog
- MDropdown
- MInput
- MInputDialog
- MLink
- MList
- MPanel
- MTable

### MDashboardLayout

**Props**:

- `items`: List of nav items.
  - `type`: link | label
  - `name`
  - `href`
  - `icon`

### MTable

Slots:

- Rows
  - `beforerow`
  - `afterrow`

- Cells
  - `head()`
  - `head(name)`
  - `topcell()`
  - `topcell(name)`
  - `cell()`
  - `cell(name)`
  - `bottomcell()`
  - `bottomcell(name)`

## Plugins

### DB

**Install**

Then add to `./src/main.js`.

```js
// ...

import DbPlugin from './plugins/db';
app.use(DbPlugin);

// ...
```

**Usage**

- db.init
- db.importDB
- db.exportDB
- db.cleanDB
- db.deleteDB
- db.get
- db.list
- db.create
- db.createMany
- db.update
- db.remove
- db.removeWhere

### Dialog

### Utils

## License

Powered [Mintailor](https://github.com/anhhaome/mintailor) based on MIT license.
