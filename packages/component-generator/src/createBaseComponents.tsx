import React, { HTMLAttributes } from 'react';
import { createStyledComponent } from './createStyledComponent';

import {
  GenericRecord,
  StyledComponentConfig,
  Variant,
  StyledSystemCSSObject
} from './typings';

export function createBaseComponents<
  Config = any,
  Theme = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(settings: {
  [key: string]:
    | StyledSystemCSSObject
    | StyledComponentConfig<Props & Variant, Theme, HTMLAttributes<Element>>;
}): GenericRecord<Config, React.FC<Props & Variant>> {
  const acc = {} as GenericRecord<Config, React.FC<Props & Variant>>;
  const baseSettings = settings.Base as StyledComponentConfig<
    Props & Variant,
    Theme,
    HTMLAttributes<Element>
  >;

  return !!settings && Object.keys(settings).length >= 1
    ? Object.entries(settings).reduce((acc, entry) => {
        const [prop, setting] = entry;

        if (hasKey(settings, prop)) {
          acc[prop] = createStyledComponent({
            ...baseSettings,
            styles: { ...baseSettings.styles, ...setting }
          } as StyledComponentConfig<Props & Variant, Theme, HTMLAttributes<Element>>);

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
