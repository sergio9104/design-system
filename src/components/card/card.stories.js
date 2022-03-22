import React from 'react';
import Card from './index';

export default {
  title: 'Components/Card',
  component: Card,
};

const Story = args => <Card {...args} />;

export const Default = Story.bind({});

Default.args = {
  name: 'CARD',
  createdAt: '2021-12-14',
  description: 'Muun is a self-custodial wallet for bitcoin and lightning.',
  numberOfConections: 3
};
