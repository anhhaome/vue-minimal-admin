import RButton from './RButton.vue'

export default {
  title: 'RButton',
  component: RButton,
  tags: ['autodocs'],
  argTypes: {
    default: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Button content'
    },
    variant: {
      control: 'select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'secondary' }
      },
      description: 'Type of button',
      options: ['primary', 'secondary', 'danger', 'success', 'info', 'warn']
    },
    disabled: {
      description: 'Disable button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: 'boolean'
    }
  }
}

const Template = (args) => ({
  components: { RButton },
  setup: () => ({ args }),
  template:
    '<RButton :variant="args.variant" :disabled="args.disabled">{{ args.default }}</RButton>'
})

export const Primary = Template.bind({})
Primary.args = {
  default: 'Primary Button',
  variant: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  default: 'Secondary Button',
  variant: 'secondary'
}

export const Danger = Template.bind({})
Danger.args = {
  default: 'Danger Button',
  variant: 'danger'
}

export const Success = Template.bind({})
Success.args = {
  default: 'Success Button',
  variant: 'success'
}

export const Info = Template.bind({})
Info.args = {
  default: 'Info Button',
  variant: 'info'
}

export const Warn = Template.bind({})
Warn.args = {
  default: 'Warn Button',
  variant: 'warn'
}
