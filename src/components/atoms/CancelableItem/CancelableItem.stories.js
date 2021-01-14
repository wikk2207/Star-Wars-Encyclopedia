import React from 'react';
import CancelableItem from "./CancelableItem";

export default {
  title: 'Components/CancelableItem',
  component: CancelableItem,
};

const Template = (args) => <CancelableItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: 'Alderaan',
}
