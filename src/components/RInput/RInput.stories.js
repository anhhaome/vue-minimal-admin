import RInput from './RInput.vue'

export default {
  title: 'RInput',
  component: RInput,
  tags: ['autodocs'],
  argTypes: {}
}

const Template = (args) => ({
  components: { RInput },
  setup: () => ({ args }),
  template: '<RInput :label="args.label" />'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Default text input'
}
