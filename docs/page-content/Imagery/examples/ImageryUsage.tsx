export const ImageryUsage = `
  import { Imagery } from 'artifak';

  export function Img({ src, fit = 'contain', position = 'center' }) {
    return (
      <Imagery src={src} objectFit={fit} objectPosition={position} />
    )
  }
`;
