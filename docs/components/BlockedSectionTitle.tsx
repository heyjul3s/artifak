import React from 'react';
import styled from 'styled-components';
import { H1 } from './Typography';

export function ArticleTitle({ title }) {
  return (
    <BlockedSectionTitleContainer>
      <BlockedSectionTitleText>{title}</BlockedSectionTitleText>
    </BlockedSectionTitleContainer>
  );
}

export function BlockedSectionTitle({ title }) {
  return (
    <BlockedSectionTitleContainer>
      <BlockedSectionTitleText>{title}</BlockedSectionTitleText>
    </BlockedSectionTitleContainer>
  );
}

const BlockedSectionTitleContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5em;

    &::after {
      content: '';
      flex: 1;
      background: ${theme.colors.primary};
      height: 1px;
      margin-bottom: 1em;
    }

    &::after {
      margin-left: 1em;
    }
  `}
`;

const BlockedSectionTitleText = styled(H1)`
  ${({ theme }) => `
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0.1em 0.25em;
  `}
`;
