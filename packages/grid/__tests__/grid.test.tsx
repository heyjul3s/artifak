import React from 'react';
import { setGridStyles, setGridTemplateColumns } from '../Grid';
import { Grid, GridItem } from '../';
import renderer from 'react-test-renderer';

describe('@artifak/grid', () => {
  describe('setGridStyles', () => {
    it('should return default styles when provided invalid styles object as argument', () => {
      const expected = { display: 'grid', gridGap: '1.5rem' };
      expect(setGridStyles({})).toEqual(expected);
      expect(setGridStyles([] as any)).toEqual(expected);
    });

    // it('should return auto-fit styles when provided columnWidth AND columnLength as part of argument', () => {
    //   const expected = {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    //     gridGap: '1.5rem',
    //   };

    //   const gridStyles = setGridStyles({
    //     columnWidth: '320px',
    //     columnLength: 6,
    //   });

    //   expect(gridStyles).toEqual(expected);
    // });

    // it('should return styles when provided columnWidth as part of argument', () => {
    //   const expected = {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    //     gridGap: '1.5rem',
    //   };

    //   const gridStyles = setGridStyles({ columnWidth: '320px' });

    //   expect(gridStyles).toEqual(expected);
    // });

    // it('should return styles when provided columnLength as part of argument', () => {
    //   const expected = {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(6, 1fr)',
    //     gridGap: '1.5rem',
    //   };
    //   const gridStyles = setGridStyles({ columnLength: 6 });
    //   expect(gridStyles).toEqual(expected);
    // });
  });

  describe('setGridTemplateColumns', () => {
    it('should return a string auto-fit CSS grid rule', () => {
      const expected = 'repeat(auto-fit, minmax(320px, 1fr))';
      const gridTemplateColumnStyles = setGridTemplateColumns('320px', void 0);
      expect(gridTemplateColumnStyles).toEqual(expected);
    });

    it('should return an array of auto-fit CSS grid rule', () => {
      const expected = [
        'repeat(auto-fit, minmax(120px, 1fr))',
        'repeat(auto-fit, minmax(320px, 1fr))',
      ];
      const gridTemplateColumnStyles = setGridTemplateColumns(
        ['120px', '320px'],
        void 0
      );
      expect(gridTemplateColumnStyles).toEqual(expected);
    });

    it('should return a string column length CSS grid rule', () => {
      const expected = 'repeat(6, 1fr)';
      expect(setGridTemplateColumns(void 0, 6)).toEqual(expected);
    });

    it('should return a array column length CSS grid rule', () => {
      const expected = ['repeat(2, 1fr)', 'repeat(6, 1fr)'];
      expect(setGridTemplateColumns(void 0, [2, 6])).toEqual(expected);
    });
  });

  describe('Grid', () => {
    it('should render', () => {
      const tree = renderer
        .create(
          <Grid>
            <GridItem>1</GridItem>
            <GridItem>2</GridItem>
            <GridItem>3</GridItem>
            <GridItem>4</GridItem>
            <GridItem>5</GridItem>
            <GridItem>6</GridItem>
          </Grid>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
