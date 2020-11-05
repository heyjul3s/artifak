import { css, ThemedCssFunction } from 'styled-components';
import isEmpty from 'lodash.isempty';
import isPlainObject from 'lodash.isplainobject';
import { mediaBounds, boundaryTypes } from './mediaBoundaries';
import { isNonEmptyString } from './utils';
import { Media } from './typings';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function media(...queries: Partial<Media>[]): ThemedCssFunction<any> {
  const args = filterQueryArgs(queries);

  return (first, ...interpolations) =>
    args.length
      ? css`
          @media ${createQueryString(queries)} {
            ${css(first, ...interpolations)}
          }
        `
      : css(first, ...interpolations);
}

export function filterQueryArgs(queries: Partial<Media>[]): Partial<Media>[] {
  return !!queries
    ? queries.filter(query => isPlainObject(query) && !isEmpty(query))
    : [];
}

export function createQueryString(queries: Partial<Media>[]): string {
  return queries.map(query => createQueryArray(query)).join(', ');
}

export function createQueryArray(queries: Partial<Media> = {}): string {
  return Object.keys(queries)
    .reduce(
      (acc, key) =>
        boundaryTypes.hasOwnProperty(key)
          ? acc.concat(mediaBounds({ [key]: queries[key] }))
          : acc.concat(formatQueryValue(queries[key])),
      []
    )
    .join(' and ');
}

export function formatQueryValue(value: string): string {
  if (!isNonEmptyString(value)) {
    return '';
  }

  return !!value && value.includes(':') ? `(${value})` : value;
}
