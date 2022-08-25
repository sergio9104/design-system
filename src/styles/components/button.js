/**
 * Possible overrides: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts
 */

const Button = {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'orange',
          boxShadow: '0 0 2px 2px #efdfde',
          color: 'white'
        },
        solid: {
          bg: 'red',
        },
        sm: {
          bg: 'teal',
          fontSize: 'md',
        },
      },
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
      },
    };

export default Button;
