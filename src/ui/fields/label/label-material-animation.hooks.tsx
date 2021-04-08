import { useRef, useState, useEffect, useContext } from 'react';
import { Animated } from 'react-native';
import { ThemeContext } from 'styled-components/native';

const SCALE = 0.8;
const DURATION = 150;

export function useFieldMaterialAnimation(
  focused: boolean,
  value: string,
): {
  translateY: Animated.Value;
  translateX: Animated.Value;
  opacity: Animated.Value;
  scale: Animated.Value;
  setLabelWidth: (width: number) => void;
} {
  const theme = useContext(ThemeContext);

  const { current: translateX } = useRef(new Animated.Value(0));
  const { current: translateY } = useRef(new Animated.Value(0));
  const { current: opacity } = useRef(new Animated.Value(1));
  const { current: scale } = useRef(new Animated.Value(1));

  const [labelWidth, setLabelWidth] = useState<number>(0);

  useEffect(() => {
    if (!!value || focused) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -((labelWidth - labelWidth * SCALE) / 2),
          duration: DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: theme.emphasis.medium,
          duration: DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: SCALE,
          duration: DURATION,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (value === '') {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 27,
          duration: DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: theme.emphasis.low,
          duration: DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: DURATION,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [
    focused,
    labelWidth,
    opacity,
    scale,
    theme.emphasis.low,
    theme.emphasis.medium,
    translateX,
    translateY,
    value,
  ]);

  return {
    translateY,
    translateX,
    opacity,
    scale,
    setLabelWidth,
  };
}
