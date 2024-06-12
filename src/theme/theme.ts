import { createTheme, virtualColor } from '@mantine/core';
import { greenGrey, dark, pink, lightGreen } from './colors';

export const theme = createTheme({
  colors: {
    greenGrey,
    dark,
    pink,
    lightGreen,
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'lightGreen',
    }),
    other: virtualColor({
      name: 'text',
      dark: 'greenGrey',
      light: 'dark',
    }),
  }
});
