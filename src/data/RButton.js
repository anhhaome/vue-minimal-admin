import { renderMarkdown } from "../utils.js";

export const variant = {
  type: 'string',
  desc: renderMarkdown(`Define button type.
    - \`primary\`
    - \`secondary\`
    - \`success\`
    - \`info\`
    - \`warn\`
    - \`danger\`
  `, true)
};

export const disabled = {
  type: 'boolean',
  desc: 'If `true`, it will disable button.'
};
