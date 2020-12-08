import React from 'react';
import isEmpty from 'lodash.isempty';
import styled, { StyledComponent } from 'styled-components';

import {
  compose,
  background,
  border,
  color,
  display,
  layout,
  position,
  shadow,
  space,
  typography,
  variant
} from 'styled-system';

import { BaseComponentProps, StyledComponentConfig } from './typings';

const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createStyledComponent<
  Props = void,
  Theme = void,
  Attributes = void
>(
  config: StyledComponentConfig<Props, Theme, Attributes>
): StyledComponent<
  keyof JSX.IntrinsicElements | React.ComponentType<Props>,
  Theme | any,
  React.ComponentType<Props & BaseComponentProps>,
  keyof any
> {
  return pipe(
    createStyledBase,
    createStyledWithAttributes,
    applyStyledComponent
  )(config);
}

export function createStyledBase<Props = void, Theme = void, Attributes = void>(
  config: StyledComponentConfig<Props, Theme, Attributes>
): StyledComponentConfig<Props, Theme, Attributes> {
  const { element = 'div' } = config;

  return {
    ...config,
    element,
    component: styled(element)
  };
}

export function createStyledWithAttributes<
  Props = void,
  Theme = void,
  Attributes = void
>(
  config: StyledComponentConfig<Props, Theme, Attributes>
): StyledComponentConfig<Props, Theme, Attributes> {
  const { attrs = {} } = config;
  return !!config.component && config.hasOwnProperty('attrs') && !isEmpty(attrs)
    ? { ...config, component: config.component.attrs(attrs) }
    : config;
}

export function applyStyledComponent<
  Props = void,
  Theme = void,
  Attributes = void
>({
  component = styled.div,
  styles = {},
  variants,
  styleProps = []
}: StyledComponentConfig<Props, Theme, Attributes>): StyledComponent<
  keyof JSX.IntrinsicElements | React.ComponentType<Props>,
  Theme | any,
  React.ComponentType<Props & BaseComponentProps>,
  keyof any
> {
  return component(
    styles,
    variant({ variants }),
    compose(
      background,
      border,
      color,
      display,
      layout,
      position,
      shadow,
      space,
      typography,
      ...styleProps
    )
  );
}
