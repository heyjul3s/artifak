import React from 'react';
import {
  BlockedSectionTitleContainer,
  BlockedSectionTitleText
} from './styles';
import { TitleProps } from './typings';

export function Title({ title }: TitleProps) {
  return (
    <BlockedSectionTitleContainer>
      <BlockedSectionTitleText>{title}</BlockedSectionTitleText>
    </BlockedSectionTitleContainer>
  );
}
