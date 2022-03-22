import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface ICard {
  name: string;
  createdAt?: string;
  description?: string;
  numberOfConections: string;
}

function Card({name, createdAt, description, numberOfConections}: ICard): ReactJSXElement {
  return (
    <Box borderWidth='1px' overflow='hidden' p='6'>
      {name && <>
        <Heading color='gray.600' size='sm'>Name</Heading>
        <Text color='gray.400' mb={1}> {name}</Text>
      </>}
      {createdAt && <>
        <Heading color='gray.600' size='sm'>Created At</Heading>
        <Text color='gray.400' mb={1}> {createdAt}</Text>
      </>}
      {numberOfConections !== null && <>
        <Heading color='gray.600' size='sm'>Number of conections</Heading>
        <Text color='gray.400' mb={1}>{numberOfConections}</Text>
      </>}
      {description && <>
        <Heading color='gray.600' size='sm'>Description</Heading>
        <Text color='gray.400'> {description}</Text>
      </>}
    </Box>
  );
}

export default Card;
