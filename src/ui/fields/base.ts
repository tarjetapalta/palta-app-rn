import styled from '@theme/styled-components';

export const ErrorWrapper = styled.View`
  margin-top: 4px;
  height: 14px;
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.text.fontSize.xs};
`;
