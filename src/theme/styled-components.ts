import * as styledComponents from 'styled-components/native';

import { ColorsType } from './colors';
import { EmphasisType } from './emphasis';
import { SpacersType } from './spacers';
import { FontSizeType, FontWeightType } from './text';

const {
  default: styled,
  ThemeProvider,
  css,
  ThemeContext,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<{
  colors: ColorsType;
  emphasis: EmphasisType;
  spacers: SpacersType;
  text: {
    fontSize: FontSizeType;
    fontWeight: FontWeightType;
  };
}>;

export { ThemeProvider, css, ThemeContext };
export default styled;
