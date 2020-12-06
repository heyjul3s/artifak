import React, { HTMLAttributes } from 'react';
import { AnyStyledComponent } from 'styled-components';
import { ComponentVariant, Settings, StyledSystemCSSObject } from './typings';

export function createBaseComponents<
  S,
  P = Record<string, unknown>,
  E = HTMLDivElement
>(
  BaseStyledComponent: AnyStyledComponent,
  settings:
    | {
        [key in keyof S]: Settings<HTMLAttributes<E>>;
      }
    | {
        [key in keyof S]: StyledSystemCSSObject;
      }
): { [key in keyof S]: React.ComponentType<P & ComponentVariant> } {
  const acc = {} as {
    [key in keyof S]: React.ComponentType<P & ComponentVariant>;
  };

  return !!settings && Object.keys(settings).length >= 1
    ? Object.entries(settings).reduce((acc, entry) => {
        const [prop, setting] = entry;
        const entrySetting = extractSettings<E>(setting);

        if (hasKey(settings, prop)) {
          acc[prop] = createStyledFunctionComponent<E, P>(
            BaseStyledComponent,
            entrySetting
          );

          acc[prop].displayName = prop;
        }

        return acc;
      }, acc)
    : acc;
}

export function extractSettings<E>(
  setting: any
): StyledSystemCSSObject & HTMLAttributes<E> {
  return hasKey(setting, 'styles') || hasKey(setting, 'attrs')
    ? { ...setting.styles, ...setting.attrs }
    : setting;
}

export function createStyledFunctionComponent<E, P>(
  BaseStyledComponent: AnyStyledComponent,
  setting: StyledSystemCSSObject & HTMLAttributes<E>
): React.ComponentType<P> {
  return props => (
    <BaseStyledComponent {...setting} {...props}>
      {props.children}
    </BaseStyledComponent>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}
