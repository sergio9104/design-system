import { chakra, Grid } from "@chakra-ui/react"

export default chakra(Grid, {
  baseStyle: {
    as: 'section', 
    display: 'grid',
    gap: 4,
    gridTemplateColumns: 'repeat(12, 1fr)',
    m: 'auto',
    maxW: '800px',
    minW: '400px',
    px: '40px',
    py: '40px',
    w: '100%',
  },
});


