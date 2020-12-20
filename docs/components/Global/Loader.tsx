import styled, { keyframes } from 'styled-components';

const rotateClockwise = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const rotateCounterClockwise = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 3px solid red;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation: ${rotateClockwise} 1s linear infinite;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid transparent;
  }

  ${({ theme }) => `
    border: 3px solid ${theme.colors.primary};
    &::after {
      border-bottom-color: ${theme.colors.primary};
    }
  `}
`;

export const DottedSpinner = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation: ${rotateClockwise} 2s linear infinite;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    animation: ${rotateCounterClockwise} 1s linear infinite;
    transform-origin: center center;
  }

  ${({ theme }) => `
    border: 3px dotted ${theme.colors.primary};
    border-style: solid solid dotted dotted;

    &::after {
      border: 3px dotted ${theme.colors.primary};
      border-style: solid solid dotted;
    }
  `}
`;
