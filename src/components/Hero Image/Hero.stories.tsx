import { Meta, StoryFn } from '@storybook/react';
import { Hero, HeroProps } from './Hero';

export default {
  title: 'StyledComponents/Hero',
  component: Hero,
  argTypes: {
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean' },
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Hero>;

const Template: StoryFn<HeroProps> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imageUrl: 'https://via.placeholder.com/800x400',
  title: 'Hero Title',
  subtitle: 'Hero Subtitle',
  visible: true,
  disabled: false,
  backgroundColor: 'transparent',
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageUrl: 'https://via.placeholder.com/800x400',
  title: 'Hero Title',
  subtitle: 'Hero Subtitle',
  disabled: true,
  backgroundColor: 'gray',
  visible: true,
};
