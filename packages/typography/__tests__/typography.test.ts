import { lineHeightByPercentage } from '../';

describe('@react-artifact/typography', () => {
  describe('lineHeightByPercentage', () => {
    it('should EQUAL 1.45 by default', () => {
      expect(lineHeightByPercentage()).toEqual(1.45);
    });
  });
});
