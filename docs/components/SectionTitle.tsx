import React from 'react';
import styled from 'styled-components';
import { H2 } from './Typography';

type Props = {
  title: string;
};

export function SectionTitle({ title }: Props) {
  return (
    <StyledSectionTitle>
      <SectionTitleH2 mb={0}>{title}</SectionTitleH2>
    </StyledSectionTitle>
  );
}

const StyledSectionTitle = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5em;

    &::before,
    &::after {
      content: '';
      flex: 1;
      background: ${theme.colors.primary};
      height: 1px;
    }

    &::before {
      margin-right: 1em;
    }

    &::after {
      margin-left: 1em;
    }

    > ${H2} {
      color: ${theme.colors.primary};
    }
  `}
`;

const SectionTitleH2 = styled(H2)`
  ${({ theme }) => `
    color: ${theme.colors.primary};
  `}
`;
