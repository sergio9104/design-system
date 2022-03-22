import React from 'react';
import Searcher from './index';

export default {
  title: 'Components/Searcher',
  component: Searcher,
};

const Story = args => <Searcher {...args} />;

export const Default = Story.bind({});

Default.args = {
  inputProps: {
    value: 'thor',
  },
  onChange: () => undefined,
};
