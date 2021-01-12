import styled from 'styled-components';
import { BrandProps } from './typings';

export const LogoContainer = styled.div<BrandProps>`
  display: flex;
  justify-content: ${({ position }) => position};
`;
