import { AllHTMLAttributes } from 'react';
import { isValidElementType } from 'react-is';
import isPlainObject from 'lodash.isplainobject';
import isEmpty from 'lodash.isempty';
import { createStyledComponent, createFC } from './createStyledComponent';

import {
  Settings,
  StyledComponentConfig,
  Variant,
  ComponentsRecord
} from './typings';

export function createComponents<
  Config = any,
  ThemeType = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(
  base:
    | StyledComponentConfig<Props, AllHTMLAttributes<Element>, ThemeType>
    | React.FC<Props>,
  settings: Settings<Element>
): ComponentsRecord<Config, Props, ThemeType> {
  const dict = createBaseComponent<Config, ThemeType, Props>(base);
  const isConfigBase = dict.hasOwnProperty('Base');

  if ((isValidElementType(base) || !isEmpty(base)) && !isEmpty(settings)) {
    return Object.entries(settings).reduce((dict, entry) => {
      const [prop, setting] = entry;

      if (hasKey(settings, prop)) {
        dict[prop] = isConfigBase
          ? generateComponent<ThemeType, Props, Element>(base, setting)
          : createFC<Props>(base, setting);
        dict[prop].displayName = prop;
      }
      return dict;
    }, dict);
  }

  return dict;
}

export function createBaseComponent<
  Config = any,
  ThemeType = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(base): ComponentsRecord<Config, Props, ThemeType> {
  const dict = {} as ComponentsRecord<Config, Props, ThemeType>;

  if (isPlainObject(base)) {
    dict.Base = createStyledComponent<
      Props,
      ThemeType,
      AllHTMLAttributes<Element>
    >(base);
  }

  return dict;
}

export function generateComponent<
  ThemeType = any,
  Props = Record<string, unknown>,
  Element = HTMLDivElement
>(base, setting) {
  return createStyledComponent<Props, ThemeType, AllHTMLAttributes<Element>>({
    ...base,
    styles: { ...base.styles, ...setting },
    attrs: { ...base.attrs, ...setting.attrs } || {},
    element: !!setting.as ? setting.as : base.element
  } as StyledComponentConfig<Props & Variant<ThemeType>, ThemeType, AllHTMLAttributes<Element>>);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}
