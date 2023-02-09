export const slots = ['open'];
export const methods = ['show', 'hide', 'toggle'];

export const open = {
  props: '`click` (type: `function`) will trigger click to show the dialog.',
  desc: 'Splot for open button.'
};

export const label = {
  type: 'string',
  desc: 'Label for open button.'
};

export const variant = {
  type: 'string',
  desc: 'Variant for open button. See more at RButton.',
};

export const disableHotKey = {
  type: 'boolean',
  desc: 'Disable ESC keyboard for trigger close event.'
};

export const disableDefaultClose = {
  type: 'boolean',
  desc: 'Disable close dialog but still send close event.'
};

export const close = {
  desc: 'Emit close event to parent when click cancel, click outside of dialog, press ESC button (when not `disableHotKey`).',
};

export const show = {
  args: '`[]`',
  desc: 'Show the dialog.'
};

export const hide = {
  args: '`[]`',
  desc: 'Hide the dialog.'
};

export const toggle = {
  args: '`[]`',
  desc: 'Toggle to other state.'
};