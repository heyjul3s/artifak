import {
  mediaBounds,
  extractOperators,
  extractValues,
  createBoundaryString
} from '../src/mediaBoundaries';

describe('mediaBounds', () => {
  it('should return an empty string when provided with an empty object arg', () => {
    expect(mediaBounds({})).toEqual('');
  });

  it('should return an empty string when provided with falsy args', () => {
    expect(mediaBounds(void 0 as any)).toEqual('');
    expect(mediaBounds(null as any)).toEqual('');
    expect(mediaBounds(0 as any)).toEqual('');
    expect(mediaBounds(false as any)).toEqual('');
  });

  it('should return media query when provided', () => {
    expect(mediaBounds({ ratio: '1/3' })).toEqual('(aspect-ratio: 1/3)');
    expect(mediaBounds({ width: '30em >= width <= 50em' })).toEqual([
      '(min-width: 30em)',
      '(max-width: 50em)'
    ]);
  });
});

describe('createBoundaryString', () => {
  it('should return an empty string if one or both args are undefined', () => {
    expect(createBoundaryString('width', void 0 as any)).toEqual('');
    expect(createBoundaryString(void 0 as any, '>= 50em')).toEqual('');
    expect(createBoundaryString(void 0 as any, void 0 as any)).toEqual('');
  });

  it('should return a single string value when no range values are provided', () => {
    expect(createBoundaryString('ratio', '1/3')).toEqual('(aspect-ratio: 1/3)');
  });

  it('should return min and max width constraints when provided', () => {
    expect(createBoundaryString('width', '30em >= width <= 50em')).toEqual([
      '(min-width: 30em)',
      '(max-width: 50em)'
    ]);
  });
});

describe('extractValues', () => {
  it('should return an empty array when provided with falsy args', () => {
    expect(extractValues('')).toEqual([]);
    expect(extractValues(false as any)).toEqual([]);
    expect(extractValues(null as any)).toEqual([]);
    expect(extractValues({} as any)).toEqual([]);
    expect(extractValues([] as any)).toEqual([]);
    expect(extractValues(123 as any)).toEqual([]);
  });

  it('should return matching operators only', () => {
    expect(extractValues('<=30em')).toEqual(['30em']);
    expect(extractValues('<= 30em')).toEqual(['30em']);

    expect(extractValues('>=50em')).toEqual(['50em']);
    expect(extractValues('>= 50em')).toEqual(['50em']);

    expect(extractValues('30em>=width<=50em')).toEqual(['30em', '50em']);
    expect(extractValues('30em >= width <= 50em')).toEqual(['30em', '50em']);
  });
});

describe('extractOperators', () => {
  it('should return an empty array when provided with falsy args', () => {
    expect(extractOperators('')).toEqual([]);
    expect(extractOperators(false as any)).toEqual([]);
    expect(extractOperators(null as any)).toEqual([]);
    expect(extractOperators({} as any)).toEqual([]);
    expect(extractOperators([] as any)).toEqual([]);
    expect(extractOperators(123 as any)).toEqual([]);
  });

  it('should return matching operators only', () => {
    expect(extractOperators('<=30em')).toEqual(['<=']);
    expect(extractOperators('<= 30em')).toEqual(['<=']);

    expect(extractOperators('>=50em')).toEqual(['>=']);
    expect(extractOperators('>= 50em')).toEqual(['>=']);

    expect(extractOperators('30em>=width<=50em')).toEqual(['>=', '<=']);
    expect(extractOperators('30em >= width <= 50em')).toEqual(['>=', '<=']);
  });
});
