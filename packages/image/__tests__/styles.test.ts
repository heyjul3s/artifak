import {
  getImageStyles,
  getBackgroundImageStyles,
  imgSizes,
} from '../utils/styles';

describe('Styles', () => {
  describe('getImageStyles - processes relevant props and returns a relevant styles object to use in an Image element', () => {
    it('should be able to return default style values if none are defined', () => {
      expect(getImageStyles(void 0 as any)).toEqual({
        objectFit: 'contain',
        objectPosition: '50% 50%',
      });
    });

    it('should style values in accordance to passed arguments', () => {
      expect(
        getImageStyles({
          fit: 'cover',
          position: 'center',
          style: {
            display: 'block',
          },
        })
      ).toEqual({
        display: 'block',
        objectFit: 'cover',
        objectPosition: 'center',
      });
    });
  });

  describe('getImageStyles - processes relevant props and returns a relevant styles object to use in a Div element', () => {
    it('should style values in accordance to passed arguments', () => {
      expect(
        getBackgroundImageStyles({
          fit: 'cover',
          position: 'center',
          style: {
            backgroundColor: 'hotpink',
          },
          src: 'https://source.unsplash.com/random/100x100',
        })
      ).toEqual({
        backgroundColor: 'hotpink',
        backgroundImage: 'url("https://source.unsplash.com/random/100x100")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      });
    });
  });

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
