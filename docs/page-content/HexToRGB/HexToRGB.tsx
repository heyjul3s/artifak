import {
  Paragraph,
  Strong,
  HR,
  H4,
  Doc,
  APIheading,
  ParamsTable
} from '@components';
import { Syntax } from '../../components/Code/Syntax';
import { hexToRGB } from './example/hexToRGB';

export function HexToRGB() {
  return (
    <Doc title="hexToRGB">
      <HexToRGBContent />
    </Doc>
  );
}

export function HexToRGBContent() {
  return (
    <>
      <Paragraph>
        hexToRGB is simply a utility function that allows you to convert
        hexadecimal colour values to RGB.
      </Paragraph>

      <HR />

      <APIheading name="hexToRGB" />
      <Paragraph>
        Usage is straightforward, simply input the hexadecimal colour value you
        wish to convert.
      </Paragraph>

      <Syntax>{hexToRGB}</Syntax>

      <HR />

      <H4>Parameters</H4>

      <Paragraph>
        The <Strong>hexToRGB</Strong> function only accepts a single argument.
      </Paragraph>

      <ParamsTable
        APIname={'base'}
        cells={[
          {
            name: 'hex',
            type: 'string',
            defaultValue: 'N/A',
            content: 'A string type hexidecimal colour value eg. #fdfdfd.'
          }
        ]}
      />
    </>
  );
}
