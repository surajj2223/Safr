import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import themes, { Theme } from './theme';

interface ThemeWrapperProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const ThemeWrapper: React.FunctionComponent<ThemeWrapperProps> = ({
  children,
  theme = themes.light,
}: ThemeWrapperProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
