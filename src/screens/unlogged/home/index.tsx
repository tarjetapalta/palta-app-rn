import React, { FunctionComponent } from 'react';

import styled from '@theme/styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Home: FunctionComponent = () => (
  <Container>
    <Text>HOME SCREEN</Text>
  </Container>
);
