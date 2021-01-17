import React from 'react';
import PlanetsTable from "./PlanetsTable";

const planets = [
  {
    name: 'Hoth',
    rotationPeriod: 23,
    orbitalPeriod: 549,
    diameter: 7200,
    climates: [
      'frozen'
    ],
    surfaceWater: 100,
    population: null
  },
  {
    name: 'Dagobah',
    rotationPeriod: 23,
    orbitalPeriod: 341,
    diameter: 8900,
    climates: [
      'murky'
    ],
    surfaceWater: 8,
    population: null
  },
  {
    name: 'Bespin',
    rotationPeriod: 12,
    orbitalPeriod: 5110,
    diameter: 118000,
    climates: [
      'temperate'
    ],
    surfaceWater: 0,
    population: 6000000
  },
  {
    name: 'Ord Mantell',
    rotationPeriod: 26,
    orbitalPeriod: 334,
    diameter: 14050,
    climates: [
      'temperate'
    ],
    surfaceWater: 10,
    population: 4000000000
  }
]

export default {
  title: 'Components/Molecules/PlanetsTable',
  component: PlanetsTable,
};

const Template = (args) => <PlanetsTable {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: planets,
}

