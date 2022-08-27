import fs from 'fs';
import { join } from 'path';

import decamelize from 'decamelize';
import ejs from 'ejs';
import { createApp } from 'vue'

import plugin from '../dist/library.mjs';
import { __dirname } from './utils.js';

const render = (filePath, data) => new Promise((resolve, reject) => {
  ejs.renderFile(filePath, data, {}, (err, str) => {
    if (err)
      return reject(err);

    resolve(str);
  });
});

const app = createApp({})
app.use(plugin);

const components = app._context.components;
let toc = '';

for (let name in components) {
  let filename = decamelize(name, {separator: '-'}) + '.md';
  let docPath = join(__dirname, `../docs/${filename}`);
  toc += `- [${name}](./docs/${filename})\n`;

  if (fs.existsSync(docPath))
    continue;

  let component = components[name];

  fs.writeFileSync(docPath, await render(join(__dirname, '../templates/component.ejs'), {
    name,
    props: component.props || [],
    emits: component.emits || [],
  }));
}

console.log(toc);