import { createMuiTheme } from '@material-ui/core/styles';
import SpoqaHanSans from "typeface-spoqa-han-sans"

const theme = createMuiTheme({
    typography: {
      fontFamily: 'Spoqa Han Sans, Helvetica, Arial, sans-serif',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [SpoqaHanSans],
        },
      },
    },
    palette: {
      primary: {
        main: '#64359A',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  
  });
  
  theme.typography.h1 = {
    fontSize: '32px',
    [theme.breakpoints.up(768)]: {
      fontSize: '80px',
    }
  }
  theme.typography.h2 = {
    fontSize: '32px',
    fontWeight: "lighter",
    [theme.breakpoints.up(768)]: {
      fontSize: '48px',
    }
  }
  theme.typography.h3 = {
    fontSize: '18px',
    fontWeight: "lighter",
    lineHeight: "2em",
    [theme.breakpoints.up(768)]: {
      fontSize: '36px',
    }
  }
  theme.typography.h4 = {
    fontSize: '14px',
    fontWeight: "lighter",
    [theme.breakpoints.up(768)]: {
      fontSize: '24px',
    }
  }
  
export default theme;