import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import customTheme from '@styles/theme';
import { AppProps } from 'next/app';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';

const theme = extendTheme(customTheme);

function MyApp({ Component, pageProps }: AppProps): ReactJSXElement {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
