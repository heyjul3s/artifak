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

  it('should return a single string value when no range values are provided', () => {
    expect(createBoundaryString('width', '>= 768px')).toEqual([
      '(min-width: 768px)'
    ]);
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

  it('should return value "em" properties only', () => {
    expect(extractValues('<=30em')).toEqual(['30em']);
    expect(extractValues('<= 30em')).toEqual(['30em']);

    expect(extractValues('>=50em')).toEqual(['50em']);
    expect(extractValues('>= 50em')).toEqual(['50em']);

    expect(extractValues('30em>=width<=50em')).toEqual(['30em', '50em']);
    expect(extractValues('30em >= width <= 50em')).toEqual(['30em', '50em']);
  });

  it('should return value "rem" properties only', () => {
    expect(extractValues('<=30rem')).toEqual(['30rem']);
    expect(extractValues('<= 30rem')).toEqual(['30rem']);

    expect(extractValues('>=50rem')).toEqual(['50rem']);
    expect(extractValues('>= 50rem')).toEqual(['50rem']);

    expect(extractValues('30rem>=width<=50rem')).toEqual(['30rem', '50rem']);
    expect(extractValues('30rem >= width <= 50rem')).toEqual([
      '30rem',
      '50rem'
    ]);
  });

  it('should return value "px" properties only', () => {
    expect(extractValues('<=30px')).toEqual(['30px']);
    expect(extractValues('<= 30px')).toEqual(['30px']);

    expect(extractValues('>=50px')).toEqual(['50px']);
    expect(extractValues('>= 50px')).toEqual(['50px']);

    expect(extractValues('30px>=width<=50px')).toEqual(['30px', '50px']);
    expect(extractValues('30px >= width <= 50px')).toEqual(['30px', '50px']);
  });

  it('should return value "vh" properties only', () => {
    expect(extractValues('<=30vh')).toEqual(['30vh']);
    expect(extractValues('<= 30vh')).toEqual(['30vh']);

    expect(extractValues('>=50vh')).toEqual(['50vh']);
    expect(extractValues('>= 50vh')).toEqual(['50vh']);

    expect(extractValues('30vh>=width<=50vh')).toEqual(['30vh', '50vh']);
    expect(extractValues('30vh >= width <= 50vh')).toEqual(['30vh', '50vh']);
  });

  it('should return value "vw" properties only', () => {
    expect(extractValues('<=30vw')).toEqual(['30vw']);
    expect(extractValues('<= 30vw')).toEqual(['30vw']);

    expect(extractValues('>=50vw')).toEqual(['50vw']);
    expect(extractValues('>= 50vw')).toEqual(['50vw']);

    expect(extractValues('30vw>=width<=50vw')).toEqual(['30vw', '50vw']);
    expect(extractValues('30vw >= width <= 50vw')).toEqual(['30vw', '50vw']);
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
