import { renderMarkdown } from "../utils.js";

export const label = {
  type: 'string',
  desc: 'Label of input',
};

export const type = {
  type: 'string',
  desc: renderMarkdown(`
    - \`text\`
    - \`password\`
    - \`number\`
    - \`date\`
    - \`email\`
  `, true)
};

export const modelValue = {
  type: 'string',
  desc: 'Bind value to the component.'
};

export const focus = {
  type: 'boolean',
  // desc: 'If `true`, it will forcus when appear.'
};

export const disabled = {
  type: 'boolean',
  desc: 'Disable the input.'
};

export const readonly = {
  type: 'boolean',
  desc: 'Readonly the input.'
};

export const update_modelValue = {
  desc: 'Fire when user enter the input.'
};


// export const focus = {
//   desc: 'Fire when it is focused.'
// };


export const blur = {
  desc: 'Fire when it is blured.'
};
