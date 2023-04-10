import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import { DELAY_INPUT } from './constants.js';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const renderMarkdown = function (content, preFormat) {
  if (content)
    content = content
      .split('\n')
      .map((i) => i.trim())
      .join('\n');

  return marked
    .parse(content)
    .split('\n')
    .map((i) => i.trim())
    .join('');
};

export const createDelayCall = () => {
  let timeout;
  let lastArgs;

  return (fn, now = false, ...args) => {
    if (now && timeout) {
      fn(...(args.length ? args : lastArgs));
      clearTimeout(timeout);
      return;
    }

    clearTimeout(timeout);
    lastArgs = args;

    timeout = setTimeout(() => {
      clearTimeout(timeout);
      fn(...args);
    }, DELAY_INPUT);
  };
};
