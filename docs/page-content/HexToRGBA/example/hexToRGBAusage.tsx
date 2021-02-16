export const hexToRGBAusage = `
  import { hexToRGBA } from 'artifak';
  import styled from 'styled-components';

  // The function returns a string
  // const RGBvalue = hexToRGBA('#FFF', 0.5);
  // console.log(RGBvalue) // logs string 'rgba(255, 255, 255, 0.5)'

  // The 2nd parameter for alpha value is optional
  // const RGBvalue = hexToRGBA('#FFF');
  // console.log(RGBvalue) // logs string 'rgba(255, 255, 255, 1)'

  const Badge = styled.div\`
    display: none;
    margin: 0 auto;
    width: 100%;
    color: \${hexToRGB('#FFF', 0.5)};
  \`;
`;
