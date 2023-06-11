import RNotification from './RNotification.vue'

export default {
  title: 'RNotification',
  component: RNotification,
  tags: ['autodocs'],
  argTypes: {
    notices: {
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      control: 'object',
      description: 'Notification data'
    }
  }
}

const Template = (args) => ({
  components: { RNotification },
  setup: () => ({ args }),
  template: '<RNotification :notices="args.notices" />'
})

export const Primary = Template.bind({})
Primary.args = {
  notices: [
    {
      id: 1,
      type: 'primary',
      title: 'Primary notification',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mattis arcu. Sed laoreet metus vel pretium aliquam.'
    }
  ]
}

export const Secondary = Template.bind({})
Secondary.args = {
  notices: [
    {
      id: 1,
      type: 'secondary',
      title: 'Secondary notification',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mattis arcu. Sed laoreet metus vel pretium aliquam.'
    }
  ]
}

export const Success = Template.bind({})
Success.args = {
  notices: [
    {
      id: 1,
      type: 'success',
      title: 'Success notification',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mattis arcu. Sed laoreet metus vel pretium aliquam.'
    }
  ]
}

export const Danger = Template.bind({})
Danger.args = {
  notices: [
    {
      id: 1,
      type: 'danger',
      title: 'Danger notification',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mattis arcu. Sed laoreet metus vel pretium aliquam.'
    }
  ]
}

export const Info = Template.bind({})
Info.args = {
  notices: [
    {
      id: 1,
      type: 'info',
      title: 'Info notification',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mattis arcu. Sed laoreet metus vel pretium aliquam.'
    }
  ]
}

export const Warn = Template.bind({})
Warn.args = {
  notices: [
    {
      id: 1,
      type: 'warn',
      title: 'Warn notification',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mattis arcu. Sed laoreet metus vel pretium aliquam.'
    }
  ]
}
