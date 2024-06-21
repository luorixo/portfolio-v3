import { createTheme, virtualColor } from '@mantine/core';
import { greenGrey, dark, light, pink, lightGreen } from './colors';

export const theme = createTheme({
  colors: {
    greenGrey,
    dark,
    light,
    pink,
    lightGreen,
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'lightGreen',
    }),
    other: virtualColor({
      name: 'text',
      dark: 'light',
      light: 'dark',
    }),
  },
  spacing: {
    xs: '0.4rem',
    lg: '1.3rem',
  },
});

// FIGMA COLOURS
// transparent black: var(--mantine-colors-dark-9)
