import React from 'react';
import CollapsableItem from "./CollapsableItem";
import PlanetsTable from "../../molecules/PlanetsTable/PlanetsTable";

const planets = [
  {
    name: 'Naboo',
    rotationPeriod: 26,
    orbitalPeriod: 312,
    diameter: 12120,
    climate: 'temperature',
    surfaceWater: '12',
    population: '45680000',
  },
  {
    name: 'Naboo',
    rotationPeriod: 26,
    orbitalPeriod: 312,
    diameter: 12120,
    climate: 'temperature',
    surfaceWater: '12',
    population: '45680000',
  },
  {
    name: 'Naboo',
    rotationPeriod: 26,
    orbitalPeriod: 312,
    diameter: 12120,
    climate: 'temperature',
    surfaceWater: '12',
    population: '45680000',
  }
]

export default {
  title: 'Components/Organisms/CollapsableItem',
  component: CollapsableItem,
};

const Template = (args) => <CollapsableItem {...args} />;

export const Empty = Template.bind({});

Empty.args = {
  title: 'A New Hope',
}

export const TableItem = Template.bind({});

TableItem.args = {
  title: 'A New Hope',
  data: planets,
}
