export const buildExample = `
  import { FlexBase, FlexRow, FlexCol, Imagery } from 'artifak';
  import { Heading2, Paragraph } from './src/Typography';

  export function Card({
    title,
    description,
    imgSrc,
    imgAlt
  }) {
    return (
      <FlexBase>
        <FlexRow>
          <FlexCol columnSize={[12, 4]}>
            <Imagery src={imgSrc} alt={imgAlt}
          </FlexCol>

          <FlexCol columnSize={[12, 8]}>
            <Heading2>{title}</Heading2>
            <Paragraph>{description}</Paragraph>
          </FlexCol>
        </FlexRow>
      </FlexBase
    );
  }
`;
