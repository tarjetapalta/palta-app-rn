import React, { FunctionComponent, useContext } from 'react';
import { Svg, Rect, Path } from 'react-native-svg';

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

export const West: FunctionComponent<IconsSvgProps> = ({ scale, color }) => {
  const theme = useContext(ThemeContext);

  return (
    <Box>
      <Svg
        viewBox="0 0 24 24"
        fill={color ? theme.colors[color] : theme.colors.text}
        width={normalSize.width * scale}
        height={normalSize.height * scale}
      >
        <Rect fill="none" height="24" width="24" />
        <Path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
      </Svg>
    </Box>
  );
};
