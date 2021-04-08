import React, { FunctionComponent, useContext } from 'react';
import { Svg, Path } from 'react-native-svg';

import styled, { ThemeContext } from '@theme/styled-components';
import { IconsSvgProps } from './types';

const normalSize = {
  width: 48,
  height: 48,
};

const Box = styled.View`
  width: 48px;
  height: 48px;
`;

export const History: FunctionComponent<IconsSvgProps> = ({ scale }) => {
  const theme = useContext(ThemeContext);

  return (
    <Box>
      <Svg
        viewBox="0 0 24 24"
        fill={theme.colors.text}
        width={normalSize.width * scale}
        height={normalSize.height * scale}
      >
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
      </Svg>
    </Box>
  );
};
