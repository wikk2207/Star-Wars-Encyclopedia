import React from 'react';
import Button from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>add movie</Button>;

export const Primary = Template.bind({});
