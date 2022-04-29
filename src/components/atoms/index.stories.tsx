import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Components/Button',
  component: Button,
};

const Story = args => <Button {...args} >Button</Button>;

export const Default = Story.bind({});

Default.args = {
    colorScheme: 'teal',
    size: 'xs',
};
