import { system } from 'styled-system';
import { createStyledComponent, extractStylePseudos } from '../src';

describe('createStyledComponent - creates a styled component with params of styles, styleProps, attrs and element', () => {
  it('should return a styled component with default config when no arguments are provided', () => {
    const resultingStyledComponent = createStyledComponent({});
    expect(resultingStyledComponent).toBeDefined();
  });

  it('should return a styled component', () => {
    const mockConfig = system({
      textDecoration: true,
      textIndent: true,
      textTransform: true,
      textOverflow: true,
      whiteSpace: true,
      wordBreak: true,
      wordSpacing: true
    });

    const resultingStyledComponent = createStyledComponent({
      styles: { fontSize: '1em' },
      styleProps: [mockConfig]
    });

    expect(resultingStyledComponent).toBeDefined();
  });
});

describe('extractStylePseudos', () => {
  it('should return an empty object if styles arg is invalid', () => {
    expect(extractStylePseudos()).toEqual({});
  });

  it('should return pseudo styles from styles object', () => {
    const styles = {
      display: 'block',

      '&:hover': {
        color: 'red'
      },

      '&::-webkit-input-placeholder': {
        color: 'hotpink'
      }
    };

    expect(extractStylePseudos(styles)).toEqual({
      '&:hover': {
        color: 'red'
      },

      '&::-webkit-input-placeholder': {
        color: 'hotpink'
      }
    });
  });
});
