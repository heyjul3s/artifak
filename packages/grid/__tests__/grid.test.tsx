import React from 'react';
import { setGridTemplateColumns, addGridGap } from '../Grid';
import { Grid, GridItem } from '../';
import { render } from '@testing-library/react';
import 'jest-styled-components';

describe('@artifak/grid', () => {
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

  describe('addGridGap', () => {
    it('should return string value of "1.5rem" if provided with invalid arguments', () => {
      const expected = '1.5rem';
      expect(addGridGap(void 0)).toEqual(expected);
    });

    it('should return grid gap string value when provided', () => {
      const expected = '3em';
      expect(addGridGap('3em')).toEqual(expected);
    });
  });

  describe('Grid', () => {
    it('should render', () => {
      const { asFragment } = render(
        <Grid>
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
          <GridItem>4</GridItem>
          <GridItem>5</GridItem>
          <GridItem>6</GridItem>
        </Grid>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render grid-auto-columns style if no columnSize prop is provided', () => {
      const { asFragment, getByTestId } = render(
        <Grid data-testid="grid" gridAutoColumns="200px">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
          <GridItem>4</GridItem>
          <GridItem>5</GridItem>
          <GridItem>6</GridItem>
        </Grid>
      );

      expect(getByTestId('grid')).toHaveStyleRule('grid-auto-columns', '200px');
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render gridGap style if a value is provided', () => {
      const { asFragment, getByTestId } = render(
        <Grid data-testid="grid" gridGap="20px">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
          <GridItem>4</GridItem>
          <GridItem>5</GridItem>
          <GridItem>6</GridItem>
        </Grid>
      );

      expect(getByTestId('grid')).toHaveStyleRule('grid-gap', '20px');
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
