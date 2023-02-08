import fs from 'fs';
import { join } from 'path';

import decamelize from 'decamelize';
import ejs from 'ejs';
import { createApp } from 'vue'
import { marked } from 'marked';

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
  const filename = decamelize(name, {separator: '-'}) + '.md';
  const docPath = join(__dirname, `../docs/${filename}`);
  const renderPath = join(__dirname, `../example/src/components/docs/${name + 'Doc.vue'}`);
  toc += `- [${name}](./docs/${filename})\n`;

  if (fs.existsSync(docPath))
    continue;

  const component = components[name];
  const content = await render(join(__dirname, '../templates/component.ejs'), {
    name,
    props: component.props || [],
    emits: component.emits || [],
  });

  fs.writeFileSync(docPath, content);
  fs.writeFileSync(renderPath, `<template>${marked.parse(content)}</template>`);
}

console.log(toc);