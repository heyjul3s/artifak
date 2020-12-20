export const variantsExample = `
  import { variants } from 'styled-system';
  import { Heading1 } from './src/Typography';

  export const H1 = styled(Heading1)(
    variants({
      variants: {
        shout: {
          color: 'red'
        },
        whisper: {
          color: 'grey'
        }
      }
    })
  );
`;
