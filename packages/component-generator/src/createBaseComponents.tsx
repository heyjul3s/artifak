import React, { HTMLAttributes } from 'react';
import { createStyledComponent } from './createStyledComponent';

import {
  Settings,
  BaseProps,
  GenericRecord,
  StyledComponentConfig,
  Variant
} from './typings';

export function createBaseComponents<
  Config = any,
  Theme = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(
  base: StyledComponentConfig<Props, Theme, Element>,
  settings: Settings
): GenericRecord<Config, React.FC<Props & BaseProps<Theme> & Variant<Theme>>> {
  const acc = {} as GenericRecord<Config, React.FC<Props & BaseProps<Theme>>>;

  return !!base && !!settings && Object.keys(settings).length >= 1
    ? Object.entries(settings).reduce((acc, entry) => {
        const [prop, setting] = entry;

        if (hasKey(settings, prop)) {
          acc[prop] = createStyledComponent({
            ...base,
            styles: { ...base.styles, ...setting }
          } as StyledComponentConfig<Props & Variant<Theme>, Theme, HTMLAttributes<Element>>);

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
