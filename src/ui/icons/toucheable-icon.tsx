import React, { FunctionComponent } from 'react';

import { KeyColors } from '@theme/colors';
import styled from '@theme/styled-components';
import { Icon } from './icon';
import { IconId } from './types';

const Toucheable = styled.TouchableOpacity<{ scale: number }>`
  width: ${({ scale }) => `${48 * scale - 4}px`};
  height: ${({ scale }) => `${48 * scale}px`};
`;

interface TouchableIconProps {
  iconId: IconId;
  scale: number;
  onActionHandle: () => void;
  color: KeyColors;
}

export const TouchableIcon: FunctionComponent<TouchableIconProps> = ({
  /** Icon name */
  iconId,
  /** Icon scale width and height */
  scale,
  /** Action function. */
  onActionHandle,
  color,
}) => (
  <Toucheable onPress={onActionHandle} scale={scale}>
    <Icon iconId={iconId} scale={scale} color={color} />
  </Toucheable>
);
