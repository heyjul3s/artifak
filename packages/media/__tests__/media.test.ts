// import { css } from 'styled-components';
import { media, formatQueryValue, createQueryValuesArray } from '../src/media';

describe('@artifak/media', () => {
  describe('media - main function that runs all necessary operations to return a styled-component media query', () => {
    it('should return a function that returns processed media queries and styles', () => {
      expect(
        media({
          screen: 'screen',
          anyHover: 'any-hover: hover',
          width: '30em >= width <= 50em',
          height: '>= 40em',
          ratio: '1/3'
        })
      ).toBeDefined();
    });
  });

  describe('createQueryValuesArray - loops through object, processes media query rules and returns them in a string array ', () => {
    it('should return an empty array when no args are passed', () => {
      expect(createQueryValuesArray()).toEqual([]);
    });

    it('should return an array with a media type screen string and any-hover rule string', () => {
      expect(
        createQueryValuesArray({
          screen: 'screen',
          anyHover: 'any-hover: hover'
        })
      ).toEqual(['screen', '(any-hover: hover)']);
    });
  });

  describe('formatQueryValue - if not a media type query, returns media query enclosed in parentheses else returns them as is', () => {
    it('should return media query value as is when provided falsy args', () => {
      expect(formatQueryValue({} as any)).toEqual('');
      expect(formatQueryValue([] as any)).toEqual('');
      expect(formatQueryValue(void 0 as any)).toEqual('');
      expect(formatQueryValue(null as any)).toEqual('');
      expect(formatQueryValue(false as any)).toEqual('');
    });

    it('should return media query string value without modification', () => {
      expect(formatQueryValue('screen')).toEqual('screen');
    });

    it('should return media query string value enclosed by parenteheseses, ', () => {
      expect(formatQueryValue('orientation: portrait')).toEqual(
        '(orientation: portrait)'
      );
    });
  });
});

// describe('extractQueryValues', () => {
//   it('needs tests', () => {
//     expect(
//       extractQueryValues({ screen: 'screen', anyHover: 'any-hover: hover' })
//     ).toEqual(['screen', '(any-hover: hover)']);
//   });
// });
