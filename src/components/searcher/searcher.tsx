import React from 'react';
import { InputProps, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface ISearcher {
  inputProps?: InputProps;
}

function Searcher({ inputProps }: ISearcher): ReactJSXElement {
  return (
    <Stack flexDirection='row'>
      <InputGroup>
        <InputLeftElement pointerEvents='none' justifyContent='left' pb='7px'>
          <SearchIcon color='black' />
        </InputLeftElement>
        <Input
          pl='30px'
          pb='7px'
          textTransform='uppercase'
          placeholder='SEARCH'
          borderRadius='0'
          data-testid='search'
          {...inputProps}
        />
      </InputGroup>
    </Stack>
  );
}

export default Searcher;
