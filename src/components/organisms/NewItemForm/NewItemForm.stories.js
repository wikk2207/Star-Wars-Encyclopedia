import React from 'react';
import NewItemForm from "./NewItemForm";


export default {
  title: 'Components/Organisms/NewItemForm',
  component: NewItemForm,
};

const Template = (args) => <NewItemForm {...args} />;

export const Primary = Template.bind({});


