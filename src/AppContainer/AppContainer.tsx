import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

import themes from '../util/theme';
import Navigation from '../Navigation/Navigation';

export default () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme
    ? colorScheme === 'dark'
      ? themes.dark
      : themes.light
    : themes.light;

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};
