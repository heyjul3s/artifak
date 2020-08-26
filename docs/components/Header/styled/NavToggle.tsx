import styled from 'styled-components';

export const NavToggle = styled.div`
  position: relative;
  top: 18px;
  width: 36px;
  height: 36px;

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
  }

  &::before {
    top: 10px;
  }

  &::after {
    top: 24px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
