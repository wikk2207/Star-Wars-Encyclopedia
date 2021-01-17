import React from 'react';
import Paragraph from "./Paragraph";

export default {
  title: 'Components/Atoms/Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args}>Alderaan</Paragraph>;

export const Primary = Template.bind({});