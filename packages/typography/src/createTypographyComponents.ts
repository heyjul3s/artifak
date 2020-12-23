import {
  GenericRecord,
  createBaseComponents,
  Settings,
  StyledComponentConfig,
  Variant
} from '@artifak/component-generator';
import { TypographyBaseProps } from './typings';
import { typographyStyleProps } from './TypographyBase';

export function createTypographyComponents<
  Config,
  ThemeType = any,
  Props = {},
  Element = HTMLDivElement
>(
  base: StyledComponentConfig<Props, ThemeType, Element>,
  settings: Settings
): GenericRecord<
  Config,
  React.FC<Props & TypographyBaseProps & Variant<ThemeType>>
> {
  const { styleProps } = getStyleProps(base);

  return createBaseComponents<
    Config,
    ThemeType,
    Props & TypographyBaseProps,
    Element
  >(
    {
      ...base,
      styleProps: [typographyStyleProps, ...styleProps]
    },
    settings
  );
}

export function getStyleProps<
  ThemeType = any,
  Props = {},
  Element = HTMLDivElement
>(base: StyledComponentConfig<Props, ThemeType, Element>) {
  if (!base || !Object.keys(base).length) {
    return { styleProps: [] };
  }

  if (!base.styleProps) {
    return { ...base, styleProps: [] };
  }

  return base;
}
