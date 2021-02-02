import React from 'react';
import { Paragraph } from '../../Typography';
import { TaglineProps } from './typings';

export function Tagline({ align = 'center' }: TaglineProps) {
  return (
    <Paragraph textAlign={align} mt={0} p={'0 1em'}>
      a light, modular and extensible ReactJS UI primitives library
    </Paragraph>
  );
}
