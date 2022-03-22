/**
 * Possible overrides: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts
 */

const Button = {
  baseStyle: {
    color: 'black',
  },
  variants: {
    link: {
      background: 'none',
      padding: '0',
      borderRadius: '0',
      textDecoration: 'none',
      color: 'black',
      _hover: {
        backgroundColor: 'none',
        border: 'none',
        textDecoration: 'none',
      },
      _focus: {
        outline: 'none',
        backgroundColor: 'none',
        border: 'none',
        textDecoration: 'none',
      },
      _active: {
        backgroundColor: 'none',
        border: 'none',
        textDecoration: 'none',
      },
    },
    linkSelected: {
      background: 'none',
      borderBottom: '2px solid',
      borderColor: 'red',
      padding: '0',
      borderRadius: '0',
      textDecoration: 'none',
      color: 'black',
      _hover: {
        backgroundColor: 'none',
        borderBottom: '2px solid',
        borderColor: 'red',
        textDecoration: 'none',
      },
      _focus: {
        outline: 'none',
        backgroundColor: 'none',
        borderBottom: '2px solid',
        borderColor: 'red',
        textDecoration: 'none',
      },
      _active: {
        backgroundColor: 'none',
        borderBottom: '2px solid',
        borderColor: 'red',
        textDecoration: 'none',
      },
    },
  },
  sizes: {},
};

export default Button;
