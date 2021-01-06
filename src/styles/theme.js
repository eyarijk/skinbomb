import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  background: {
    primary: '#141415',
    secondary: '#070707',
  },
  text: {
    gray: '#A3A3A3',
    purple: '#7445EC',
  },
  typography: {
    color: {
      initial: '#DEDEDE',
      primary: '#7445EC',
      secondary: '#818181',
    },
  },
  overrides: {
    MuiSlider: {
      thumb: {
        color: '#DC8103',
      },
      track: {
        color: '#DC8103',
      },
      rail: {
        color: '#282828',
      },
    },
  },
});

export { theme };
