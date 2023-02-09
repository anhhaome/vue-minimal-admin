import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const renderMarkdown = function(content, preFormat) {
  if (content)
    content = content.split('\n').map(i => i.trim()).join('\n');
    
  return marked.parse(content).split('\n').map(i => i.trim()).join('');
}