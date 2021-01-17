import React from 'react';
import RemovableElement from "./RemovableElement";

export default {
  title: 'Components/Atoms/RemovableElement',
  component: RemovableElement,
};

const Template = (args) => <RemovableElement {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: 'Alderaan',
}
