import isPlainObject from 'lodash.isplainobject';
import styled from 'styled-components';
import { borderRadius, compose, color, space, typography } from 'styled-system';
import {
  createStyledSystemComponents,
  // createComponents,
} from '@react-artifact/component-generator';

export const TypographySystemComponent = styled('div')(
  compose(borderRadius, color, space, typography)
);

export function createTypographyComponents<TS, TC>(systemComponentStyles) {
  if (
    isPlainObject(systemComponentStyles) &&
    Object.keys(systemComponentStyles).length
  ) {
    return createStyledSystemComponents<TS, TC>(
      TypographySystemComponent,
      systemComponentStyles
    );
  } else {
    return TypographySystemComponent;
  }
}

export function lineHeightInDecimals(
  multiplyByPercentage: number = 145
): number {
  return multiplyByPercentage / 100;
}

export function fluidSizing(
  minFontSize: number,
  maxFontSize: number,
  minViewportWidth: number,
  maxViewportWidth: number
) {
  return (
    !!minFontSize &&
    !!maxFontSize &&
    !!minViewportWidth &&
    !!maxViewportWidth &&
    `calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * ((100vw - ${minViewportWidth}px) / (${maxViewportWidth} - ${minViewportWidth})))`
  );
}

enum EFontWeightKeys {
  THIN = 'thin',
  EXTRA_LIGHT = 'extraLight',
  LIGHT = 'light',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semiBold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extraBold',
  BLACK = 'black',
}

type TFontWeight = {
  [key in EFontWeightKeys]: number;
};

export const fontWeight = Object.keys(EFontWeightKeys).reduce((acc, key, i) => {
  const index = i === 0 ? 1 : i;
  acc[key] = index * 100;

  return acc;
}, {} as TFontWeight);
