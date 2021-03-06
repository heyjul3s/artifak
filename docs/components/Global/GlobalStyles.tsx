import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { theme } from '../../theme';

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  html{
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100%;
    background-color: ${theme.colors.fadedWhite};
    font-family: 'Biryani', sans-serif;
    font-size: 16px;
    color: ${theme.colors.grey}
  }
`;
