import { css } from 'styled-components';
import { mediaBounds, boundaryTypes } from './mediaBoundaries';
import { isNonEmptyString } from './utils';
import { Media } from './typings';

export function media(queries: Partial<Media>) {
  return (...styles) =>
    !!queries && Object.keys(queries).length
      ? css`
          @media ${createQueryValuesArray(queries).join(' and ')} {
            ${css(...styles)}
          }
        `
      : css(...styles);
}

export function createQueryValuesArray(queries: Partial<Media> = {}): string[] {
  return Object.keys(queries).reduce((acc, key) => {
    if (boundaryTypes.hasOwnProperty(key)) {
      return acc.concat(mediaBounds({ [key]: queries[key] }));
    }

    return acc.concat(formatQueryValue(queries[key]));
  }, []);
}

export function formatQueryValue(value: string): string {
  if (!isNonEmptyString(value)) {
    return '';
  }

  return !!value && value.includes(':') ? `(${value})` : value;
}

// export function joinQueries(queries): string {
//   return `@media ${createQueryValuesArray(queries).join(' and ')} {`;
// }
