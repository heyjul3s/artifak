import React from 'react';
import styled from 'styled-components';

export function NavTop() {
  return <NavTopContainer />
}

const NavTopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  ${({ theme }) => `
    background-color: ${theme.colors.primary};
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 7px,
      rgba(241, 94, 34, 1) 1px,
      rgba(241, 94, 34, 1) 8px
    );
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    z-index: 1;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 7px,
      rgba(241, 94, 34, 1) 1px,
      rgba(241, 94, 34, 1) 8px
    );
  }

`

