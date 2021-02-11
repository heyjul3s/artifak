import React from 'react';
import isEmpty from 'lodash.isempty';
import styled, { CSSObject } from 'styled-components';

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
  typography
} from 'styled-system';

import { BaseConfig, ScalableCSS } from './typings';

const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createStyledComponent<
  Props extends any,
  Theme = void,
  Attributes = void
>(config: BaseConfig<Props, Attributes, Theme>): React.FC<Props> {
  const Styled = createStyled<Props, Theme, Attributes>(config);
  return createFC<Props>(Styled, config.styles);
}

export function createStyled<Props = void, Theme = void, Attributes = void>(
  config: BaseConfig<Props, Attributes, Theme>
): React.FC<Props> {
  return pipe(
    createStyledElement,
    createStyledAttributes,
    applyStyledProps
  )(config);
}

export function createFC<Props = void>(
  Component: React.FC<Props>,
  styles: ScalableCSS | undefined
): React.FC<Props> {
  return props => (
    <Component {...props} {...styles}>
      {props.children}
    </Component>
  );
}

export function createStyledElement<
  Props = void,
  Theme = void,
  Attributes = void
>(
  config: BaseConfig<Props, Attributes, Theme>
): BaseConfig<Props, Attributes, Theme> {
  const { element = 'div' } = config;
  return {
    ...config,
    element,
    component: styled(element)
  };
}

export function createStyledAttributes<
  Props = void,
  Theme = void,
  Attributes = void
>(
  config: BaseConfig<Props, Attributes, Theme>
): BaseConfig<Props, Attributes, Theme> {
  const { attrs = {} } = config;
  return !!config.component && config.hasOwnProperty('attrs') && !isEmpty(attrs)
    ? { ...config, component: config.component.attrs(attrs) }
    : config;
}

export function applyStyledProps<
  Props = void,
  Theme = void,
  Attributes = void
>({
  component = styled.div,
  styleProps = [],
  styles
}: BaseConfig<Props, Attributes, Theme>) {
  const pseudoStyles = extractStylePseudos(styles);

  return component(
    pseudoStyles,
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

export function extractStylePseudos(styles: ScalableCSS = {}): CSSObject {
  return Object.keys(styles).reduce((acc, key) => {
    if (key.includes('&:')) {
      acc[key] = styles[key];
    }

    return acc;
  }, {});
}
