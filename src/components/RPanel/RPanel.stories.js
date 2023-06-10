import RPanel from './RPanel.vue'

export default {
  title: 'RPanel',
  component: RPanel,
  tags: ['autodocs'],
  argTypes: {
    default: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Panel content'
    }
  }
}

const Template = (args) => ({
  components: { RPanel },
  setup: () => ({ args }),
  template: '<RPanel>{{ args.default }}</RPanel>'
})

export const Default = Template.bind({})
Default.args = {
  default: 'Default panel content'
}
