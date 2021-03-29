import 'styled-components';

import { ColorsType } from '../src/theme/colors';
import { EmphasisType } from '../src/theme/emphasis';
import { SpacersType } from '../src/theme/spacers';
import { FontSizeType, FontWeightType } from '../src/theme/text';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    emphasis: EmphasisType;
    spacers: SpacersType;
    text: {
      fontSize: FontSizeType;
      fontWeight: FontWeightType;
    };
  }
}
