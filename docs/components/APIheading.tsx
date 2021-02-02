import React from 'react';
import { H3 } from './Typography';
import { Params } from './Code/Params';
import { theme } from '../theme';

type Props = {
  name: string;
  params?: any;
};

export function APIheading({ name, params }: Props) {
  const hasParams = !!params && Object.keys(params).length;

  return (
    <>
      <H3 color={theme.colors.primary} m={!hasParams ? '0 0 0.5em' : '0'}>
        {name}
      </H3>

      {hasParams && <Params params={params} />}
    </>
  );
}
