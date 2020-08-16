import { setGridStyles, gridTemplateColumns } from '../Grid';

describe('@react-artifact/grid', () => {
  describe('setGridStyles', () => {
    it('should return default styles when provided invalid styles object as argument', () => {
      const expected = { display: 'grid', gridGap: '1.5rem' };
      expect(setGridStyles({})).toEqual(expected);
      expect(setGridStyles([] as any)).toEqual(expected);
    });

    it('should return auto-fit styles when provided columnWidth AND columnLength as part of argument', () => {
      const expected = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gridGap: '1.5rem',
      };

      const gridStyles = setGridStyles({
        columnWidth: '320px',
        columnLength: 6,
      });

      expect(gridStyles).toEqual(expected);
    });

    it('should return styles when provided columnWidth as part of argument', () => {
      const expected = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gridGap: '1.5rem',
      };

      const gridStyles = setGridStyles({ columnWidth: '320px' });

      expect(gridStyles).toEqual(expected);
    });

    it('should return styles when provided columnLength as part of argument', () => {
      const expected = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridGap: '1.5rem',
      };
      const gridStyles = setGridStyles({ columnLength: 6 });
      expect(gridStyles).toEqual(expected);
    });
  });

  describe('gridTemplateColumns', () => {
    it('should return an object with auto-fit CSS grid rule', () => {
      const expected = {
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      };
      const gridTemplateColumnStyles = gridTemplateColumns('320px', void 0);
      expect(gridTemplateColumnStyles).toEqual(expected);
    });

    it('should return an object with column length CSS grid rule', () => {
      const expected = { gridTemplateColumns: 'repeat(6, 1fr)' };
      expect(gridTemplateColumns(void 0, 6)).toEqual(expected);
    });
  });
});
