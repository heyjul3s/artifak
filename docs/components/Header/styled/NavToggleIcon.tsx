import styled from 'styled-components';

export const NavToggleIcon = styled.div`
  position: relative;
  top: 18px;
  width: 36px;
  height: 36px;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 6px;
    background: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 6px;
    transition: background 300ms ease-out;
  }

  &::before {
    top: 10px;
  }

  &::after {
    top: 24px;
  }

  &:hover {
    &::before,
    &::after {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
