import React from 'react';
import Heading from "./Heading";

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args}>A New Hope</Heading>;

export const Primary = Template.bind({});
