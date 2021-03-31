import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

interface GradientProps {
  colors: {
    start: string;
    end: string;
  };
  start?: {
    x: number;
    y: number;
  };
  end?: {
    x: number;
    y: number;
  };
}

// Hexa was transformed to rgba because transparency was needed
export const Gradient: FunctionComponent<GradientProps> = ({
  children,
  colors,
  start,
  end,
}) => (
  <LinearGradient
    colors={[colors.start, colors.end]}
    start={{
      x: start?.x || 0,
      y: start?.y || 0,
    }}
    end={{
      x: end?.x || 0,
      y: end?.y || 1,
    }}
    style={styles.gradient}
  >
    {children}
  </LinearGradient>
);
