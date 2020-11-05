import {
  media,
  formatQueryValue,
  createQueryArray,
  createQueryString,
  filterQueryArgs
} from '../src/media';

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

    it('should handle multiple media query arg objects', () => {
      expect(
        media(
          { width: '30em >= width <= 50em', screen: 'screen' },
          { landscape: 'orientation: landscape' }
        )
      ).toBeDefined();
    });
  });

  describe('filterQueryArgs', () => {
    it('should return an empty array when provided with falsy args', () => {
      expect(filterQueryArgs(void 0)).toEqual([]);
      expect(filterQueryArgs(null)).toEqual([]);
      expect(filterQueryArgs([void 0, null])).toEqual([]);
    });

    it('should return an empty array when provided with empty query objects', () => {
      expect(filterQueryArgs([{}])).toEqual([]);
    });

    it('should return an array with query objects when provided with non-empty query objects', () => {
      expect(filterQueryArgs([{ width: '>= 30em' }])).toEqual([
        { width: '>= 30em' }
      ]);

      expect(
        filterQueryArgs([{ screen: 'screen' }, { width: '>= 30em' }])
      ).toEqual([{ screen: 'screen' }, { width: '>= 30em' }]);
    });
  });

  describe('createQueryString - concatenates query string arrays with "OR" if applies', () => {
    it('should return media query string with formatted value when provided a single prop in a single query object', () => {
      expect(createQueryString([{ width: '>= 30em' }])).toEqual(
        '(min-width: 30em)'
      );
    });

    it('should return media query string concatenated with "AND" when given a single query object', () => {
      expect(
        createQueryString([
          {
            screen: 'screen',
            width: '30em >= width <= 50em'
          }
        ])
      ).toEqual('screen and (min-width: 30em) and (max-width: 50em)');
    });

    it('should return media query string concatenated with "OR" when given multiple query object', () => {
      expect(
        createQueryString([
          { screen: 'screen', width: '>= 30em' },
          { landscape: 'orientation: landscape' }
        ])
      ).toEqual('screen and (min-width: 30em), (orientation: landscape)');
    });
  });

  describe('createQueryArray - processes media query rules and returns them in a string concatenated with "AND" if applies', () => {
    it('should return an empty array when no args are passed', () => {
      expect(createQueryArray()).toEqual('');
    });

    it('should return an array with a media type screen string and any-hover rule string', () => {
      expect(
        createQueryArray({
          screen: 'screen',
          anyHover: 'any-hover: hover'
        })
      ).toEqual('screen and (any-hover: hover)');
    });

    it('should return an array with a media type screen string and any-hover rule string', () => {
      expect(
        createQueryArray({
          screen: 'screen',
          width: '30em >= width <= 50em'
        })
      ).toEqual('screen and (min-width: 30em) and (max-width: 50em)');
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
