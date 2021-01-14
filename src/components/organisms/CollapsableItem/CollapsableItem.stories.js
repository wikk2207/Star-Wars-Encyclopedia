import React from 'react';
import CollapsableItem from "./CollapsableItem";

export default {
  title: 'Components/Organisms/CollapsableItem',
  component: CollapsableItem,
};

const Template = (args) => <CollapsableItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'A New Hope',
}
