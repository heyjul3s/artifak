import React from 'react';
import styled, { AnyStyledComponent, StyledComponent } from 'styled-components';

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

import {
  BaseComponentProps,
  StyledComponentConfig,
  StyledComponentConfigWithBase
} from './typings';

const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

export function createStyledComponent<P = void, T = void, A = void>(
  config: StyledComponentConfig<P, T, A>
): StyledComponent<
  keyof JSX.IntrinsicElements | React.ComponentType<P>,
  T | any,
  React.ComponentType<P & BaseComponentProps>,
  keyof any
> {
  return pipe(
    createStyledBase,
    createStyledWithAttributes,
    applyStyledComponent
  )(config);
}

export function createStyledBase<P = void, T = void, A = void>(
  config: StyledComponentConfig<P, T, A>
): StyledComponentConfigWithBase<P, T, A> {
  const { element = 'div' } = config;

  return {
    ...config,
    element,
    component: styled(element)
  };
}

export function createStyledWithAttributes<P = void, T = void, A = void>(
  config: StyledComponentConfigWithBase<P, T, A>
): StyledComponentConfigWithBase<P, T, A> {
  return config.hasOwnProperty('attrs') && !!config.attrs
    ? { ...config, component: config.component.attrs(config.attrs) }
    : config;
}

export function applyStyledComponent<P = void, T = void, A = void>({
  component,
  styles = {},
  variants,
  styleProps = []
}: StyledComponentConfigWithBase<P, T, A>): AnyStyledComponent {
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
