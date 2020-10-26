import { imgSizes } from '../../src/utils/attributes';

describe('Attributes', () => {
  describe('imgSizes', () => {
    it('should return undefined with invalid arguments', () => {
      const expected = void 0;
      expect(imgSizes()).toEqual(expected);
    });

    it('should return sizes string when bothh srcset and sizes are valid strings', () => {
      const expected =
        '((min-width: 50em) and (max-width: 60em)) 50em, ((min-width: 30em) and (max-width: 50em)) 30em, (max-width: 30em) 20em';

      expect(
        imgSizes(
          'images/team-photo.jpg 1x, images/team-photo-retina.jpg 2x, images/team-photo-full 2048w',
          '((min-width: 50em) and (max-width: 60em)) 50em, ((min-width: 30em) and (max-width: 50em)) 30em, (max-width: 30em) 20em'
        )
      ).toEqual(expected);
    });
  });
});
