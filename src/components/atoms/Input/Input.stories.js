import React from 'react';
import Input from "./Input";

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: 'Please enter the title of the movie',
  name: 'title',
  label: 'Movie title',
}

export const Search = Template.bind({});

Search.args = {
  placeholder: 'Search for the planet in database',
  search: true,
  name: 'planet',
  label: 'Add planet',
}