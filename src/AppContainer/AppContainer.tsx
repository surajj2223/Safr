import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../util/theme';
import Navigation from '../Navigation/Navigation';

export default () => (
  <ThemeProvider theme={themes.light}>
    <Navigation />
  </ThemeProvider>
);
