import { createBaseComponents } from '@artifak/component-generator';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createBlockComponents<
  Config,
  Theme = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(settings) {
  return createBaseComponents<Config, Theme, Props, Element>(settings);
}
