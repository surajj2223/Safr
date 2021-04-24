import React from 'react';
import { render } from '@testing-library/react-native';

import Navigation from './Navigation';
import { ThemeWrapper } from '../util/testutils';

describe('Navigation', () => {
  test('should match snapshot', () => {
    const { toJSON } = render(
      <ThemeWrapper>
        <Navigation />
      </ThemeWrapper>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
