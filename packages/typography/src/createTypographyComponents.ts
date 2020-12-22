import { createBaseComponents } from '@artifak/component-generator';
import { TypographyBaseProps } from './typings';
import { typographyStyleProps } from './TypographyBase';

export function createTypographyComponents<
  Config,
  Theme = any,
  Props = Record<string, unknown> & TypographyBaseProps,
  Element = HTMLDivElement
>(settings: any) {
  return createBaseComponents<Config, Theme, Props, Element>({
    Base: {
      ...settings.Base,
      styleProps: [typographyStyleProps, ...settings.Base.styleProps]
    },
    ...settings
  });
}
