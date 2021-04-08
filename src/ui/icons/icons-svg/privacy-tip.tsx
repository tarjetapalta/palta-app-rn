import React, { FunctionComponent, useContext } from 'react';
import { Svg, G, Rect, Path } from 'react-native-svg';

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

export const PrivacyTip: FunctionComponent<IconsSvgProps> = ({ scale }) => {
  const theme = useContext(ThemeContext);

  return (
    <Box>
      <Svg
        viewBox="0 0 24 24"
        fill={theme.colors.text}
        width={normalSize.width * scale}
        height={normalSize.height * scale}
      >
        <G>
          <Rect fill="none" height="24" width="24" />
          <Path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z" />
        </G>
      </Svg>
    </Box>
  );
};
