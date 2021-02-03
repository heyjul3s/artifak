import React from 'react';
import styled from 'styled-components';

export function FeaturedItemIcon({ children }) {
  return (
    <FeaturedItemIconContainer>
      {children}
    </FeaturedItemIconContainer>
  )
}

export const FeaturedItemIconContainer = styled.div`
  ${({ theme }) => `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 0 auto 1.5em;

    > svg {
      max-width: 60px;
      max-height: 60px;
    }
  `}
`;