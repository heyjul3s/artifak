export const hexToRGB = `
  import { hexToRGB } from 'artifak';
  import styled from 'styled-components';

  // The function returns a string
  // const RGBvalue = hexToRGB('#FFF');
  // console.log(RGBvalue) // logs string 'rgb(255, 255, 255)'

  const Badge = styled.div\`
    display: none;
    margin: 0 auto;
    width: 100%;
    color: \${hexToRGB('#FFF')};
  \`;
`;
