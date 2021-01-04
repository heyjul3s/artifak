import {
  createComponents,
  ComponentsRecord,
  Settings,
  BaseConfig
} from '@artifak/component-generator';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createBlocks<
  Config,
  ThemeType = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(
  base: BaseConfig<Props, ThemeType, Element>,
  settings: Settings<Element>
): ComponentsRecord<Config, Props, ThemeType> {
  return createComponents<Config, ThemeType, Props, Element>(base, settings);
}
