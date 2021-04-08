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

export const Edit: FunctionComponent<IconsSvgProps> = ({ scale }) => {
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
        <Path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </Svg>
    </Box>
  );
};
