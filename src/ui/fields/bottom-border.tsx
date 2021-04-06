import React, { FunctionComponent } from 'react';
import { Animated } from 'react-native';

import styled, { css } from '@theme/styled-components';

const lineStyle = css`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 1px;
`;

const Line = styled(Animated.View)`
  ${lineStyle}
  background-color: ${({ theme }) => theme.colors.primary};
`;

const LineGrey = styled.View<{ value: string }>`
  ${lineStyle}
  background-color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme, value }) =>
    value === '' ? theme.emphasis.low : theme.emphasis.medium};
`;

interface BottomBorderProps {
  focused: boolean;
}

export const BottomBorder: FunctionComponent<
  BottomBorderProps & {
    value: string;
  }
> = ({ focused, value }) => {
  const { current: scaleX } = React.useRef(new Animated.Value(0));

  // Scale 0 don't work on android, we need to hide the whole component
  const [pinkIsVisible, setPinkIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (focused) {
      setPinkIsVisible(true);
      Animated.timing(scaleX, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      scaleX.setValue(0);
      setPinkIsVisible(false);
    }
  }, [scaleX, focused]);

  return (
    <>
      <LineGrey value={value} />
      {pinkIsVisible && <Line style={{ transform: [{ scaleX }] }} />}
    </>
  );
};
