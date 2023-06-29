import {
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { flatten } from 'ramda';
import { rimraf } from 'rimraf';

const walk = (root, dir) => {
  const parent = join(root, dir);
  return flatten(
    readdirSync(parent).map((name) => {
      const stat = statSync(join(parent, name));
      const path = join(dir, name);

      if (stat.isDirectory()) return walk(root, path);

      return [path];
    })
  );
};

const rootDir = resolve();
const exampleDir = join(rootDir, './example');

rimraf.sync(exampleDir);
mkdirSync(exampleDir, { recursive: true });

const copySourceEntities = [
  ...walk(rootDir, './src'),
  ...walk(rootDir, './lib/theme'),
  './lib/theme.js',
  'index.html',
  'vite.config.js',
  'postcss.config.js',
  'tailwind.config.js',
];

for (const entity of copySourceEntities) {
  mkdirSync(join(exampleDir, dirname(entity)), { recursive: true });
  writeFileSync(
    join(exampleDir, entity),
    readFileSync(join(rootDir, entity))
      .toString()
      .replace(
        new RegExp('(["\']).*/lib/index\\.js["\']', 'gm'),
        '$1@rugo-vn/vue$1'
      )
      .replace(
        new RegExp('(["\']).*/lib/theme\\.js["\']', 'gm'),
        '$1@rugo-vn/vue/theme$1'
      )
  );
}

writeFileSync(
  join(exampleDir, 'package.json'),
  JSON.stringify(
    {
      name: 'example',
      version: '0.0.0',
      private: true,
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'vite build',
        preview: 'vite preview',
      },
    },
    0,
    2
  )
);
