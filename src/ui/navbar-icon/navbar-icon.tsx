import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';
import { useRecoilState } from 'recoil';

import { statusBar } from '@store';
import styled from '@theme/styled-components';
import { Icon } from '../icons';
import { IconId } from '../icons/types';

const IconTouchable = styled.TouchableOpacity`
  padding-top: 10px;
`;

const IconWrapper = styled.View`
  opacity: ${({ theme }) => theme.emphasis.high};
  height: 40px;
`;

interface Props {
  onActionHandle?: () => void;
  iconId: IconId;
}

export const NavbarIcon: FunctionComponent<Props> = ({
  onActionHandle,
  iconId,
}) => {
  const { goBack } = useNavigation();
  const [statusBarColor, setStatusBarColor] = useRecoilState(statusBar);
  const [isKeyboarOpen, setIsKeyboardOpen] = useState(false);

  const isKeyboardShow = (): void => {
    setIsKeyboardOpen(true);
  };

  const isKeyboardHide = (): void => {
    setIsKeyboardOpen(false);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', isKeyboardShow);
    Keyboard.addListener('keyboardDidHide', isKeyboardHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', isKeyboardShow);
      Keyboard.removeListener('keyboardDidHide', isKeyboardHide);
    };
  }, []);

  const handleAction = useCallback(() => {
    if (onActionHandle) {
      onActionHandle();
    } else {
      if (statusBarColor !== 'UNSHOW') {
        setStatusBarColor('UNSHOW');
      }
      if (isKeyboarOpen) {
        Keyboard.dismiss();
        setTimeout(() => {
          goBack();
        }, 80);
      } else {
        goBack();
      }
    }
  }, [
    goBack,
    onActionHandle,
    statusBarColor,
    setStatusBarColor,
    isKeyboarOpen,
  ]);

  return (
    <IconTouchable onPress={handleAction} accessibilityLabel="volver">
      <IconWrapper>
        <Icon iconId={iconId} scale={0.6} />
      </IconWrapper>
    </IconTouchable>
  );
};
