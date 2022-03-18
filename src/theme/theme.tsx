import {extendTheme} from "native-base";

export const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      }
    },
    Input: {
      defaultProps: {
        colorScheme: 'red'
      }
    }
  },
  config: {
    initialColorMode: 'light',
  }
});
