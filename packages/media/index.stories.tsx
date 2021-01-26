import * as React from 'react';
import { media, screen } from './src';
import styled from 'styled-components';

const Sample = styled.p`
  color: black;

  ${media({ screen, width: '>= 768px' })`
    color: red;
  `}
`;

export const Media = () => {
  return <Sample>Hello</Sample>;
};

export default {
  title: 'Media'
};
