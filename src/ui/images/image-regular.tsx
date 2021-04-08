import React, { FunctionComponent } from 'react';
import {
  Image,
  StyleSheet,
  ViewProps,
  ImageSourcePropType,
} from 'react-native';

import styled from '@theme/styled-components';

type KeyImages = 'isologo';

type ImageRegularType = Pick<ViewProps, 'testID'>;

interface ImageRegularProps extends ImageRegularType {
  name: KeyImages;
  width: number;
  height: number;
}

export const LogoWrapper = styled.View`
  margin-left: -15px;
`;

const ImageWrapper = styled.View<Pick<ImageRegularProps, 'width' | 'height'>>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

/*
  This is declared using StyleSheet because
  Styled Component don't support undefined as a value
*/
const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'contain',
  },
});

const seletedImage = (name: KeyImages): ImageSourcePropType => {
  switch (name) {
    case 'isologo':
      return require('../../../assets/images/isologo-512-04.png');
    default:
      throw new Error('Invalid image name');
  }
};

export const ImageRegular: FunctionComponent<ImageRegularProps> = ({
  /** Test id for test */
  testID,
  /** Image name */
  name,
  /** Image wrapper width */
  width,
  /** Image Wrapper height */
  height,
}) => (
  <ImageWrapper width={width} height={height}>
    <Image source={seletedImage(name)} testID={testID} style={styles.image} />
  </ImageWrapper>
);
