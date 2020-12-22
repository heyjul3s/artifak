import React from 'react';
import isEmpty from 'lodash.isempty';
import styled from 'styled-components';

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

import { StyledComponentConfig } from './typings';

const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createStyledComponent<
  Props extends any,
  Theme = void,
  Attributes = void
>(config: StyledComponentConfig<Props, Theme, Attributes>): React.FC<Props> {
  const Styled = pipe(
    createStyledBase,
    createStyledWithAttributes,
    applyStyledComponent
  )(config);

  return props => (
    <Styled {...props} {...config.styles}>
      {props.children}
    </Styled>
  );
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
  styleProps = []
}: StyledComponentConfig<Props, Theme, Attributes>) {
  return component(
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
