export const slots = ['open', 'main'];

export const open = {
  props:
    '`click` (type: `function`) will trigger click to show the dialog. `isOpened` (type `boolean`) determine dropdown is show or not.',
  desc: 'Slot for open button.',
};

export const main = {
  props:
    '`click` (type: `function`) will trigger click to show the dialog. `isOpened` (type `boolean`) determine dropdown is show or not.',
  desc: 'Main slot.',
};

export const label = {
  type: 'string',
  desc: 'Label for open button.',
};

export const variant = {
  type: 'string',
  desc: 'Variant for open button. See more at RButton.',
};

export const disableAutoHide = {
  type: 'boolean',
  desc: 'Disable auto hide dropdown.',
};

export const margin = {
  type: 'number',
  desc: 'Margin between button and float part.',
};

export const boxAlign = {
  type: 'string',
  desc: 'Can be `left`, `right`, `auto`. Align float part.',
};
