import { isNonEmptyString } from './utils';

export enum BoundaryTypes {
  'width' = 'width',
  'height' = 'height',
  'ratio' = 'ratio',
  'res' = 'res'
}

export enum BoundaryOperators {
  '>=' = '>=',
  '<=' = '<='
}

export const boundaryTypes = {
  [BoundaryTypes.width]: BoundaryTypes.width,
  [BoundaryTypes.height]: BoundaryTypes.height,
  [BoundaryTypes.ratio]: 'aspect-ratio',
  [BoundaryTypes.res]: 'resolution'
};

export const boundaryOperators = {
  [BoundaryOperators['>=']]: 'min',
  [BoundaryOperators['<=']]: 'max'
};

export type MediaBoundaries = {
  [key in BoundaryTypes]: string;
};

export function mediaBounds(
  query: Partial<MediaBoundaries>
): string | string[] {
  if (!!query && Object.keys(query).length) {
    const [key, value] = Object.entries(query)[0];
    return createBoundaryString(key, value);
  }

  return '';
}

export function createBoundaryString(
  boundaryType: string,
  value: string
): string | string[] {
  if (!boundaryType || !value) {
    return '';
  }

  const operators = extractOperators(value);
  const values = extractValues(value);

  return Array.isArray(operators) && operators.length
    ? operators.map(
        (op, i) => `(${boundaryOperators[op]}-${boundaryType}: ${values[i]})`
      )
    : `(${boundaryTypes[boundaryType]}: ${values[0]})`;
}

export function extractValues(value: string): string[] {
  const VALUE_REGEX = /((\d{1,}\/\d{1,})|(\d{1,}(r|em)|px|vh|vw))+/g;
  return isNonEmptyString(value) ? value.match(VALUE_REGEX) : [];
}

export function extractOperators(value: string): string[] {
  const OPERATOR_REGEX = /(?:[(>|<)=)]+)/g;
  return isNonEmptyString(value) ? value.match(OPERATOR_REGEX) : [];
}
