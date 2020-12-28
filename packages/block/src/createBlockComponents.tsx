import {
  createComponents,
  GenericRecord,
  Settings,
  StyledComponentConfig,
  Variant
} from '@artifak/component-generator';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createBlockComponents<
  Config,
  ThemeType = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(
  base: StyledComponentConfig<Props, ThemeType, Element>,
  settings: Settings
): GenericRecord<Config, React.FC<Props & Variant<ThemeType>>> {
  return createComponents<Config, ThemeType, Props, Element>(base, settings);
}
