import React from 'react';
import Select from "./Select";

const items = [
  {value: 'apple', name: 'apple'},
  {value: 'pear', name: 'pear'},
  {value: 'orange', name: 'orange'},
  {value: 'grape', name: 'grape'},
  {value: 'banana', name: 'banana'},
]

export default {
  title: 'Components/Molecules/Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items,
  onItemSelect: () => {},
  name: 'fruit',
}