import { AllHTMLAttributes } from 'react';
import {
  createComponents,
  ComponentsRecord,
  Settings,
  BaseConfig
} from '@artifak/component-generator';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createTextInputs<
  Config,
  Props = any,
  ThemeType = any,
  Element = HTMLInputElement
>(
  base: BaseConfig<Props, ThemeType, AllHTMLAttributes<Element>>,
  settings: Settings<Element>
): ComponentsRecord<Config, Props, ThemeType> {
  return createComponents<Config, ThemeType, Props, Element>(
    {
      element: 'input',
      attrs: { type: 'text' },
      ...base
    },
    settings
  );
}
