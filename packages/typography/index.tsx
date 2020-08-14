import styled from 'styled-components';
import { borderRadius, compose, color, space, typography } from 'styled-system';
import { createStyledSystemComponents } from './generator';

// TODO: works with variant
// TODO: additional add on prop types and props

const TypographySystemComponent = styled('div')(
  compose(borderRadius, color, space, typography)
);

export function createTypographyComponents<TS, TC>(systemComponentStyles) {
  return createStyledSystemComponents<TS, TC>(
    TypographySystemComponent,
    systemComponentStyles
  );
}

export function lineHeightByPercentage(
  multiplyByPercentage: number = 145
): number {
  return multiplyByPercentage / 100;
}

export function fluidTypeSizing(
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

enum FontWeightKeys {
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

type FontWeight = {
  [key in FontWeightKeys]: number;
};

export const fontWeight = Object.keys(FontWeightKeys).reduce((acc, key, i) => {
  const index = i === 0 ? 1 : i;
  acc[key] = index * 100;

  return acc;
}, {} as FontWeight);
