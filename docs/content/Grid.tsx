import { H1, H2, Paragraph, LargeLead } from '../components/Typography';
import { Syntax, Params } from '../components/Syntax';
import {
  gridExampleUsage,
  columnWidthExample,
  columnWidthMqExample,
  columnLengthExample,
  columnLengthMqExample
} from '../codeExamples/grid/grid';
import {
  ColumnWidthDemo,
  ColumnWidthMqDemo,
  ColumnLengthDemo,
  ColumnLengthMqDemo
} from '../codeExamples/grid/GridDemo';

export function Grid() {
  return (
    <>
      <H1>Grid</H1>

      <Paragraph>
        The Grid library has nothing to with Tron unfortunately and comprises of
        2 components for your layout needs which are the <strong>Grid</strong>{' '}
        component and the <strong>GridItem</strong> component.
      </Paragraph>

      <LargeLead>Grid</LargeLead>

      <Params
        properties={{
          columnWidth: 'string | string[]',
          columnLength: 'number | number[]'
        }}
      />

      <Paragraph>
        The Grid component comes with a gap default of 1.5em and two properties
        namely <strong>columnLength</strong> and <strong>columnWidth</strong>.
      </Paragraph>

      <LargeLead>GridItem</LargeLead>

      <Paragraph>
        GridItem, as suggested, is a component that is used to contain your
        elements within the Grid component. It includes CSS grid child style
        properties to be used at your discretion. By default, it applies no
        styles unless specified.
      </Paragraph>

      <H2>Usage</H2>

      <LargeLead>columnWidth</LargeLead>

      <Paragraph>
        With columnWidth, GridItems will wrap around depending on your viewport
        width. You can define a single value...
      </Paragraph>

      <Syntax>{columnWidthExample}</Syntax>

      <ColumnWidthDemo />

      <Paragraph>
        Or define an array of values that corresponds to breakpoints defined in
        your theme. Resize your browser window to see it in action.
      </Paragraph>

      <Syntax>{columnWidthMqExample}</Syntax>

      <ColumnWidthMqDemo />

      <LargeLead>columnLength</LargeLead>

      <Paragraph>
        With columnLength, GridItems will retain the specified columnLength and
        resize in accordance to your viewport width.
      </Paragraph>

      <Syntax>{columnLengthExample}</Syntax>

      <ColumnLengthDemo />

      <Paragraph>
        Like its brethren columnWidth, you may also define an array of column
        lengths. Resize your browser window to see it in action.
      </Paragraph>

      <Syntax>{columnLengthMqExample}</Syntax>

      <ColumnLengthMqDemo />
    </>
  );
}
