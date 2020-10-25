import React from 'react';
import { AnyStyledComponent } from 'styled-components';

export function createBaseComponents<ST, CP>(
  BaseStyledComponent: AnyStyledComponent,
  styles: ST
): { [key in keyof ST]: React.FC<CP> } {
  return !!styles && Object.keys(styles).length >= 1
    ? Object.entries(styles).reduce((acc, entry) => {
        const [prop, style] = entry;

        if (hasKey(styles, prop)) {
          acc[prop] = createStyledFunctionComponent<ST, CP>(
            BaseStyledComponent,
            style
          );
          acc[prop].displayName = prop;
        }

        return acc;
      }, {} as { [key in keyof ST]: React.FC<CP> })
    : ({} as { [key in keyof ST]: React.FC<CP> });
}

export function createStyledFunctionComponent<ST, CP>(
  BaseStyledComponent: AnyStyledComponent,
  styles: ST
): React.FC<CP> {
  return props => (
    <BaseStyledComponent {...styles} {...props}>
      {props.children}
    </BaseStyledComponent>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}
