import RHeading from './RHeading.vue'

export default {
  title: 'RHeading',
  component: RHeading,
  tags: ['autodocs'],
  argTypes: {
    default: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Heading content'
    },
    type: {
      control: 'select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h1' }
      },
      description: 'Type of heading',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  }
}

const Template = (args) => ({
  components: { RHeading },
  setup: () => ({ args }),
  template: '<RHeading :type="args.type">{{ args.default }}</RHeading>'
})

export const HeadingLevel1 = Template.bind({})
HeadingLevel1.args = {
  default: 'Default heading content',
  type: 'h1'
}

export const HeadingLevel2 = Template.bind({})
HeadingLevel2.args = {
  default: 'Default heading content',
  type: 'h2'
}

export const HeadingLevel3 = Template.bind({})
HeadingLevel3.args = {
  default: 'Default heading content',
  type: 'h3'
}
