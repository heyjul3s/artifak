import React from 'react';
import { Logo } from '../../Logo/Logo';
import { BrandProps } from './typings';
import { LogoContainer } from './styles';

export function Brand({ position = 'center' }: BrandProps) {
  return (
    <LogoContainer position={position}>
      <Logo />
    </LogoContainer>
  );
}
