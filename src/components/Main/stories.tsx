import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Main } from '.';

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>;

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />;
Basic.args = {
  title: 'React Avançado',
  description: 'Typescript, ReactJS, NextJS e Styled Components'
};
