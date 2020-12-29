import {
  GenericRecord,
  createComponents,
  Settings,
  StyledComponentConfig,
  Variant
} from '@artifak/component-generator';
import { styleFn } from 'styled-system';
import { TypographyBaseProps } from './typings';
import { typographyStyleProps } from './TypographyBase';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createTypography<
  Config,
  ThemeType = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(
  base: StyledComponentConfig<Props, ThemeType, Element>,
  settings: Settings
): GenericRecord<
  Config,
  React.FC<Props & TypographyBaseProps & Variant<ThemeType>>
> {
  const { styleProps } = getStyleProps(base);

  return createComponents<
    Config,
    ThemeType,
    Props & TypographyBaseProps,
    Element
  >(
    {
      ...base,
      styleProps: [typographyStyleProps, ...(styleProps as styleFn[])]
    },
    settings
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getStyleProps<
  ThemeType = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(
  base: StyledComponentConfig<Props, ThemeType, Element>
): StyledComponentConfig<Props, ThemeType, Element> {
  if (!base || !Object.keys(base).length) {
    return { styleProps: [] };
  }

  if (!base.styleProps) {
    return { ...base, styleProps: [] };
  }

  return base;
}
