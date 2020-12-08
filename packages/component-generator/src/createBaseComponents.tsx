import React, { HTMLAttributes } from 'react';
import { AnyStyledComponent } from 'styled-components';
import { Variant, Settings, StyledSystemCSSObject } from './typings';

export function createBaseComponents<
  S,
  P = Record<string, unknown>,
  E = HTMLDivElement
>(
  Base: AnyStyledComponent,
  settings:
    | { [key in keyof S]: Settings<HTMLAttributes<E>> }
    | { [key in keyof S]: StyledSystemCSSObject }
): { [key in keyof S]: React.ComponentType<P & Variant> } {
  const acc = {} as { [key in keyof S]: React.ComponentType<P & Variant> };

  return !!settings && Object.keys(settings).length >= 1
    ? Object.entries(settings).reduce((acc, entry) => {
        const [prop, setting] = entry;
        const entrySetting = extractSettings<E>(
          setting as Settings<HTMLAttributes<E>> | StyledSystemCSSObject
        );

        if (hasKey(settings, prop)) {
          acc[prop] = createStyledFunctionComponent<E, P>(Base, entrySetting);

          acc[prop].displayName = prop;
        }

        return acc;
      }, acc)
    : acc;
}

export function extractSettings<E>(
  setting: Settings<HTMLAttributes<E>>
): StyledSystemCSSObject & HTMLAttributes<E>;

export function extractSettings<E>(
  setting: StyledSystemCSSObject
): StyledSystemCSSObject & HTMLAttributes<E>;

export function extractSettings<E>(
  setting: Settings<HTMLAttributes<E>> | StyledSystemCSSObject
): StyledSystemCSSObject & HTMLAttributes<E>;

export function extractSettings<E>(
  setting: any
): StyledSystemCSSObject & HTMLAttributes<E> {
  return hasKey(setting, 'styles') || hasKey(setting, 'attrs')
    ? { ...setting.styles, ...setting.attrs }
    : setting;
}

export function createStyledFunctionComponent<E, P>(
  Base: AnyStyledComponent,
  setting: StyledSystemCSSObject & HTMLAttributes<E>
): React.FC<P> {
  return props => (
    <Base {...setting} {...props}>
      {props.children}
    </Base>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}
