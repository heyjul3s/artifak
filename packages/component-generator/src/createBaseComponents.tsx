import React, { HTMLAttributes } from 'react';
import { createStyledComponent } from './createStyledComponent';

import {
  Settings,
  BaseProps,
  GenericRecord,
  StyledComponentConfig,
  Variant
} from './typings';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createBaseComponents<
  Config = any,
  ThemeType = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(
  base: StyledComponentConfig<Props, ThemeType, Element>,
  settings: Settings
): GenericRecord<
  Config,
  React.FC<Props & BaseProps<ThemeType> & Variant<ThemeType>>
> {
  const acc = {} as GenericRecord<
    Config,
    React.FC<Props & BaseProps<ThemeType>>
  >;

  return !!base && !!settings && Object.keys(settings).length >= 1
    ? Object.entries(settings).reduce((acc, entry) => {
        const [prop, setting] = entry;

        if (hasKey(settings, prop)) {
          acc[prop] = createStyledComponent({
            ...base,
            styles: { ...base.styles, ...setting }
          } as StyledComponentConfig<Props & Variant<ThemeType>, ThemeType, HTMLAttributes<Element>>);

          acc[prop].displayName = prop;
        }

        return acc;
      }, acc)
    : acc;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}
