import React from 'react';
import { Text } from '@chakra-ui/react';

export default {
  title: 'Foundations/Typography'
};

const Story = args => { return (<Text {...args}>
  This is responsive text
</Text>)};

export const Default = Story.bind({});

Default.args = {
    fontSize: { 
      base: '24px', 
      md: '40px', 
      lg: '56px' 
    }
};
