import React from 'react';
import { render } from '@testing-library/react';
import {
  getColumnWidth,
  setColumnSizing,
  setColumnOffset,
  setGutterWidth,
  parseNumberToTwoDecimals,
  FlexCol
} from '../src/FlexCol';

describe('FlexCol', () => {
  describe('getColumnWidth', () => {
    it('should return 100 when provided with invalid args', () => {
      const expected = 100;
      expect(getColumnWidth(-1)).toEqual(expected);
      expect(getColumnWidth(Infinity)).toEqual(expected);
      expect(getColumnWidth(NaN)).toEqual(expected);
      expect(getColumnWidth(null as any)).toEqual(expected);
      expect(getColumnWidth({} as any)).toEqual(expected);
      expect(getColumnWidth([] as any)).toEqual(expected);
    });

    it('should return a default value of 8.33 if arg is undefined', () => {
      const expected = 8.33;
      expect(getColumnWidth(void 0 as any)).toEqual(expected);
    });

    it('should return a number value of "33.33" when provided with arg of 3', () => {
      const expected = 33.33;
      expect(getColumnWidth(3)).toEqual(expected);
    });

    it('should return 100 when provided arg is less than 2', () => {
      const expected = 100;
      expect(getColumnWidth(0)).toEqual(expected);
      expect(getColumnWidth(1)).toEqual(expected);
    });
  });

  describe('setColumnSizing', () => {
    it('should return a string percentage value when provided with a number value as arg', () => {
      const baseColumn = 8.3;
      const expected = '33.20%';
      expect(setColumnSizing(baseColumn, 4)).toEqual(expected);
    });

    it('should return an array of string percentage values when provided with an array of number column sizings', () => {
      const baseColumn = 8.3;
      const expected = ['99.60%', '49.80%'];
      expect(setColumnSizing(baseColumn, [12, 6])).toEqual(expected);
    });
  });

  describe('setColumnOffset', () => {
    it('should return a string percentage value when provided with a number value as arg', () => {
      const baseColumn = 8.3;
      const expected = '16.6%';
      expect(setColumnOffset(baseColumn, 2)).toEqual(expected);
    });

    it('should return an array of string percentage values when provided with an array of number column offsets', () => {
      const baseColumn = 8.3;
      const expected = ['8.3%', '16.6%'];
      expect(setColumnOffset(baseColumn, [1, 2])).toEqual(expected);
    });
  });

  describe('setGutterWidth', () => {
    it('should return a string em value when provided with a number value as arg', () => {
      const expected = '0.5em';
      expect(setGutterWidth(1)).toEqual(expected);
    });

    it('should return an array of string em values when provided with an array of numbers', () => {
      const expected = ['0.5em', '1em'];
      expect(setGutterWidth([1, 2])).toEqual(expected);
    });
  });

  describe('parseNumberToTwoDecimals', () => {
    it('should return a string number with only 2 decimal places', () => {
      expect(parseNumberToTwoDecimals(5 * 1.3326)).toEqual('6.66');
    });
  });

  describe('FlexCol', () => {
    it('should render', () => {
      const { asFragment } = render(<FlexCol columnSize={1}>Test</FlexCol>);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
