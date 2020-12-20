import React from 'react';
import styled from 'styled-components';
import { GridItem } from 'artifak';
import { H4, Paragraph } from '../../../../../components/Typography';
import { FeaturedItemIcon } from './FeaturedItemIcon';

type FeatureItemProps = {
  title: string;
  content: string;
  Icon: any;
}

export function FeatureItem({ title, content, Icon }: FeatureItemProps) {
  return (
    <StyledFeatureItem>
      <FeaturedItemContainer>
        <FeaturedItemIcon>
          <Icon />
        </FeaturedItemIcon>

        <H4>{title}</H4>
        <Paragraph>{content}</Paragraph>
      </FeaturedItemContainer>
    </StyledFeatureItem>
  );
}

export const StyledFeatureItem = styled(GridItem)`
  ${({ theme }) => `
    padding: 2em;
    text-align: center;

    > ${Paragraph} {
      color: ${theme.colors.white};
    }
  `}
`;

export const FeaturedItemContainer = styled.div`
  padding: 1.5em;
  min-height: 260px;
`
