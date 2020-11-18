import React, { HTMLAttributes } from 'react';
import { AnyStyledComponent } from 'styled-components';
import { ComponentVariant } from './typings';

export type Settings<A> = {
  styles: { [key in keyof any]: string | string[] | number | number[] };
  attrs?: A;
};

export function createBaseComponents<P, S, A>(
  BaseStyledComponent: AnyStyledComponent,
  settings: { [key in keyof S]: Settings<HTMLAttributes<A>> }
): { [key in keyof S]: React.FC<P & ComponentVariant> } {
  return !!settings && Object.keys(settings).length >= 1
    ? Object.entries(settings).reduce((acc, entry) => {
        const [prop, setting] = entry;
        const { styles, attrs } = setting as Settings<HTMLAttributes<A>>;

        if (hasKey(settings, prop)) {
          acc[prop] = createStyledFunctionComponent<P, A>(
            BaseStyledComponent,
            styles,
            attrs
          );

          acc[prop].displayName = prop;
        }

        return acc;
      }, {} as { [key in keyof S]: React.FC<P & ComponentVariant> })
    : ({} as { [key in keyof S]: React.FC<P & ComponentVariant> });
}

export function createStyledFunctionComponent<P, A>(
  BaseStyledComponent: AnyStyledComponent,
  styles: { [key: string]: string | string[] | number | number[] },
  attrs: HTMLAttributes<A> = {}
): React.FC<P> {
  return props => (
    <BaseStyledComponent {...styles} {...attrs} {...props}>
      {props.children}
    </BaseStyledComponent>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}
