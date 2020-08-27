import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

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
    background-color: #fdfdfd;
    font-family: 'Biryani', sans-serif;
  }
`;

// background: linear-gradient(
//     -45deg,
//     white 47%,
//     rgba(235, 37, 46, 0.85) 15%,
//     rgba(235, 37, 46, 0.85) 50%,
//     white 50%,
//     white 97%,
//     rgba(235, 37, 46, 0.85) 75%,
//     rgba(235, 37, 46, 0.85)
//   );
