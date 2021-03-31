import React, { FunctionComponent } from 'react';
import { ViewProps, ImageSourcePropType } from 'react-native';

import styled from '@theme/styled-components';

type KeyImage = 'home';

const seletedImage = (name: KeyImage): ImageSourcePropType => {
  switch (name) {
    case 'home':
      return require('../../../assets/images/background-02.png');
    default:
      throw new Error('Invalid image name');
  }
};

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

type ImageBackgroundType = Pick<ViewProps, 'testID'>;

interface ImageBackgroundProps extends ImageBackgroundType {
  name: KeyImage;
}

export const ImageBackground: FunctionComponent<ImageBackgroundProps> = ({
  /** Test id for test */
  testID,
  /** Image background name */
  name,
}) => <Image source={seletedImage(name)} testID={testID} />;
