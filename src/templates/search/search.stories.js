import React from 'react';
import Search from './index';

export default {
  title: 'Components/Search',
  component: Search,
};

const Story = args => <Search {...args} />;

export const Default = Story.bind({});
