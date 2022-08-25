import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: { 
      type: "select", 
      options: ["with-shadow", "solid", "sm"] 
    },
  }}
};

const Story = args => <Button {...args} >Button</Button>;

export const Default = Story.bind({});

Default.args = {
  variant: "with-shadow"
};