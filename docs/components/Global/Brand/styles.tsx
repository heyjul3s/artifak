import styled from 'styled-components';
import { BlockBase } from 'artifak';
import { BrandProps } from './typings';

export const LogoContainer = styled(BlockBase)<BrandProps>`
  display: flex;
  justify-content: ${({ position }) => position};
`;
