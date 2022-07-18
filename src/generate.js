import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import rimraf from 'rimraf';
import pascalcase from 'pascalcase';

// prepare output
const __dirname = dirname(fileURLToPath(import.meta.url));
const output = join(__dirname, '../dist/ionicons');
const input = join(__dirname, '../ionicons');

if (existsSync(output)){
  rimraf.sync(output);
}

mkdirSync(output, { recursive: true });

// prepare input
const BLACK_LIST = [
  'logo-medium',
  'color-wand'
];

const data = 
  JSON.parse(readFileSync(join(input, './src/data.json')))
  .icons
  .reduce((result, item) => {
    if (!/(-(outline|sharp)){1}$/.test(item.name))
      result.push(item);
      
    return result;
  }, [])
  .filter(icon => BLACK_LIST.indexOf(icon.name) === -1);

// render
const loadSvgContent = (iconName, iconType) => {
  let filePath = join(input, './src/svg', `${iconName}${iconType ? ('-' + iconType) : ''}.svg`);
  if (!existsSync(filePath))
    filePath = join(input, './src/svg', `${iconName}.svg`);

  const content = 
    readFileSync(filePath)
    .toString()
    .replace(/stroke\:\#000\;/gm, '')
    .replace(/stroke\=\"\#000\"/gm, '');

  return content;
}

// write result
let indexContent = '';
for (let icon of data){
  let componentName = pascalcase(icon.name) + 'Icon';
  let componentContent = `<script setup>
  defineProps(["type"]);
</script>

<template>
  <div class="ion-icon">
    <div class="icon-inner" v-if="type === 'sharp'">
      ${loadSvgContent(icon.name, 'sharp')}
    </div>

    <div class="icon-inner" v-else-if="type === 'outline'">
      ${loadSvgContent(icon.name, 'outline')}
    </div>

    <div class="icon-inner" v-else>
      ${loadSvgContent(icon.name)}
    </div>
  </div>
</template>
`;

  indexContent += `export { default as ${componentName} } from './${componentName}.vue';\n`;
  writeFileSync(join(output, `${componentName}.vue`), componentContent);
}

writeFileSync(join(output, 'index.js'), indexContent);