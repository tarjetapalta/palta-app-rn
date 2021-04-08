import React, { FunctionComponent } from 'react';
import { StackHeaderProps } from '@react-navigation/stack';

import styled from '@theme/styled-components';
import { H3 } from '../typography';

const NavbarWrapper = styled.View`
  padding: 0px 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

const IconContainer = styled.View`
  width: 30px;
`;

const TextWrapper = styled.View`
  width: 65%;
`;

interface NavbarProps extends Partial<StackHeaderProps> {
  disableBackButton?: boolean;
  border?: boolean;
  title?: string;
  headerLeft?: FunctionComponent;
  headerRight?: FunctionComponent;
}

export const Navbar: FunctionComponent<NavbarProps> = (props) => {
  const { title, headerLeft, headerRight } =
    props.scene?.descriptor?.options || props;

  return (
    <NavbarWrapper>
      <IconContainer>{headerLeft ? headerLeft({}) : null}</IconContainer>
      <TextWrapper>
        <H3 textAlign="left">{title}</H3>
      </TextWrapper>
      <IconContainer>{headerRight ? headerRight({}) : null}</IconContainer>
    </NavbarWrapper>
  );
};
