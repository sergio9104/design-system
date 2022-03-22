import React from 'react';
import { RouterContext } from "next/dist/shared/lib/router-context"
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { addDecorator } from '@storybook/react';
import customTheme from '@styles/theme';

const theme = extendTheme(customTheme);

addDecorator((storyFn) => (
  <ChakraProvider theme={theme} resetCSS>
    {storyFn()}
  </ChakraProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  nextRouter: {
    path: '/',
    asPath: '/',
    query: {},
    push() {},
    Provider: RouterContext.Provider,
  },
};