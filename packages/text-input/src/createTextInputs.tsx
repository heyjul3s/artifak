import React, { AllHTMLAttributes } from 'react';
import {
  createComponents,
  Settings,
  StyledComponentConfig,
  Variant
} from '@artifak/component-generator';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createTextInputs<
  Config,
  Props = any,
  ThemeType = any,
  Element = HTMLInputElement
>(
  base: StyledComponentConfig<Props, ThemeType, AllHTMLAttributes<Element>>,
  settings: Settings<Element>
): { [key in keyof Config | 'Base']: React.FC<Props & Variant<ThemeType>> } {
  return createComponents<Config, ThemeType, Props, Element>(
    {
      element: 'input',
      attrs: { type: 'text' },
      ...base
    },
    settings
  );
}
