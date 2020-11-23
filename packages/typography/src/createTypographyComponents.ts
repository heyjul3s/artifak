import { HTMLAttributes } from 'react';
import { createBaseComponents, Settings } from '@artifak/component-generator';
import { TypographyBaseProps } from './typings';
import { TypographyBase } from './TypographyBase';

export function createTypographyComponents<
  S,
  A = HTMLHeadingElement & HTMLParagraphElement
>(
  settings: { [key in keyof S]: Settings<HTMLAttributes<A>> }
): { [key in keyof S]: React.FC<TypographyBaseProps> } {
  return createBaseComponents<S, TypographyBaseProps, A>(
    TypographyBase,
    settings
  );
}
