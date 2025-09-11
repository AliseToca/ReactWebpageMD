import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#14110F', 
    },
    secondary: {
      main: '#FFD902', 
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '.3rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '.2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1350,
    },
  },
  components: {
    // Customize MUI components globally
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          textTransform: 'none', // disable uppercase
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
