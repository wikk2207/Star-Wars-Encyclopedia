import React from 'react';
import Select from "./Select";

const items = [
  {value: 'Alderaan'},
  {value: 'pear'},
  {value: 'orange'},
  {value: 'grape'},
  {value: 'banana'},
]

export default {
  title: 'Components/Molecules/Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items
}