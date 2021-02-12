import {
  Paragraph,
  Strong,
  H4,
  ParamsTable,
  HR,
  Doc,
  APIheading
} from '@components';
import { Syntax } from '../../components/Code/Syntax';
import { hexToRGBAusage } from './example/hexToRGBAusage';

export function HexToRGBA() {
  return (
    <Doc title="hexToRGBA">
      <HexToRGBAContent />
    </Doc>
  );
}

export function HexToRGBAContent() {
  return (
    <>
      <Paragraph>
        hexToRGBA is simply a utility function that allows you to convert
        hexadecimal colour values to RGBA.
      </Paragraph>

      <HR />

      <APIheading name="hexToRGBA" />
      <Paragraph>
        Usage is straightforward, simply input the hexadecimal colour value you
        wish to convert and provide an alpha value as well if you wish.
      </Paragraph>

      <Syntax>{hexToRGBAusage}</Syntax>

      <HR />

      <H4>Parameters</H4>

      <Paragraph>
        The <Strong>hexToRGBA</Strong> function only accepts 2 arguments,{' '}
        <Strong>hex</Strong>, which is the hexadecimal colour value and{' '}
        <Strong>alpha</Strong>, which is the alpha value.
      </Paragraph>

      <ParamsTable
        APIname={'base'}
        cells={[
          {
            name: 'hex',
            type: 'string',
            defaultValue: 'N/A',
            content: 'A string type hexidecimal colour value eg. #fdfdfd.'
          },
          {
            name: 'alpha',
            type: 'number',
            defaultValue: '1',
            content: 'A numeric value between 0 and 1 eg. 0.75.'
          }
        ]}
      />
    </>
  );
}
