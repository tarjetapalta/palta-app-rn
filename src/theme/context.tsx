import React, { FunctionComponent } from 'react';
import { ThemeProvider as Provider } from 'styled-components/native';

import { colors } from './colors';
import { emphasis } from './emphasis';
import { spacers } from './spacers';
import { fontSize, fontWeight } from './text';

const ThemeProvider: FunctionComponent = ({
  /** Internal content componets */
  children,
}) => (
  <Provider
    theme={{
      colors,
      spacers,
      emphasis,
      text: {
        fontSize,
        fontWeight,
      },
    }}
  >
    {children}
  </Provider>
);

export default ThemeProvider;
