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

export const ArrowBack: FunctionComponent<IconsSvgProps> = ({
  scale,
  color,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Box>
      <Svg
        viewBox="0 0 24 24"
        fill={color ? theme.colors[color] : theme.colors.text}
        width={normalSize.width * scale}
        height={normalSize.height * scale}
      >
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </Svg>
    </Box>
  );
};
