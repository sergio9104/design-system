import React from 'react';
import { Box } from '@chakra-ui/react';

export default {
  title: 'Foundations/Colors',
  argTypes: {
    bg: { control: { 
      type: "select", 
      options: ["red", "orange", "yellow", "green", "gray", "teal", "cyan", "blue", "purple", "pink"] 
    },
  }}
};

const Story = args => <Box {...args} w={100} h={100}/>;

export const Default = Story.bind({});

Default.args = {
  bg: "red",
};



