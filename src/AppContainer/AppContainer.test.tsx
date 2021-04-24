import React from 'react';
import { render } from '@testing-library/react-native';
import AppContainer from './AppContainer';
import { ThemeWrapper } from '../util/testutils';

describe('App Container', () => {
  test('should match snapshot', () => {
    const { toJSON } = render(
      <ThemeWrapper>
        <AppContainer />
      </ThemeWrapper>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
