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

export const AccountBalanceWallet: FunctionComponent<IconsSvgProps> = ({
  scale,
}) => {
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
        <Path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </Svg>
    </Box>
  );
};
