export const type = {
  type: 'string',
  desc: 'Can be `checkbox`, `radio`'
};

export const label = {
  type: 'string',
  desc: 'Label of checkbox'
};

export const group = {
  type: 'string',
  desc: '(For `radio` type) group list of checkbox with same name.'
};

export const value = {
  type: 'string',
  desc: '(For `radio` type) Value when checkbox is selected.'
};

export const variant = {
  type: 'string',
  desc: 'Checkbox type. See more at the RButton.'
};

export const modelValue = {
  type: 'any',
  desc: 'For `checkbox` type, it is boolean type. For `radio` type, it is checkbox value.'
};

export const indeterminate = {
  type: 'boolean',
  desc: 'Indeterminate state.'
}

export const update_modelValue = {
  type: 'function',
  desc: 'Update modelValue.'
}

