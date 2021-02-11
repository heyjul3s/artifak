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
import { pxToRemUsage } from './example/pxToRemUsage';

export function PxToRem() {
  return (
    <Doc title="pxToEm">
      <PxToRemContent />
    </Doc>
  );
}

export function PxToRemContent() {
  return (
    <>
      <Paragraph>
        This utility function converts <Strong>PX</Strong> values to{' '}
        <Strong>REM</Strong> values.
      </Paragraph>

      <HR />

      <APIheading name="pxToRem" />
      <Paragraph>
        Simply include your desired px value to convert and a size to base it
        off of for the 2nd paramater.
      </Paragraph>

      <Syntax>{pxToRemUsage}</Syntax>

      <HR />

      <H4>Parameters</H4>

      <Paragraph>
        The <Strong>pxToRem</Strong> function accepts 2 arguments.
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
