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
import { pxToEmUsage } from './example/pxToEmUsage';

export function PxToEm() {
  return (
    <Doc title="pxToEm">
      <PxToEmContent />
    </Doc>
  );
}

export function PxToEmContent() {
  return (
    <>
      <Paragraph>
        This utility function converts <Strong>PX</Strong> values to{' '}
        <Strong>EM</Strong> values.
      </Paragraph>

      <HR />

      <APIheading name="pxToEm" />
      <Paragraph>
        Simply include your desired px value to convert and a size to base it
        off of for the 2nd paramater.
      </Paragraph>

      <Syntax>{pxToEmUsage}</Syntax>

      <HR />

      <H4>Parameters</H4>

      <Paragraph>
        The <Strong>pxToEm</Strong> function accepts 2 arguments.
      </Paragraph>

      <ParamsTable
        APIname={'base'}
        cells={[
          {
            name: 'size',
            type: 'string | number',
            defaultValue: 'N/A',
            content: 'A numeric or string type value eg. 16 or 16px.'
          },
          {
            name: 'baseSize',
            type: 'number',
            defaultValue: '16',
            content: 'The base or parent size you wish the sizing to adhere to.'
          }
        ]}
      />
    </>
  );
}
