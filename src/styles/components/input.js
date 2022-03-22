/**
 * Possible overrides: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/input.ts
 */

const Input = {
  baseStyle: {
    field: {
      _focus: { boxShadow: 'none', outlineColor: 'yellow' },
      _hover: { borderBottom: '2px solid', borderColor: 'black' },
      _placeholder: { color: 'lightGray' },
      border: 'none',
      borderBottom: '2px solid',
      borderColor: 'black',
      fontFamily: 'RobotoCondensed,Trebuchet MS,Helvetica,Arial,sans-serif',
      fontWeight: '800',
      paddingBottom: '7px',
    },
  },
  sizes: {
    md: {
      field: {
        fontSize: 'xl',
        letterSpacing: '1px',
      },
    },
  },
  defaultProps: {
    variant: null,
  },
};

export default Input;
