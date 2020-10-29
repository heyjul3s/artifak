import { Paragraph, Strong } from '../components/Typography';
import { Syntax } from '../components/Syntax';

import {
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

import { HR } from '../components/HR';
import { FlexTable } from '../components/FlexTable';
import { ArticleDoc } from '../components/ArticleDoc';
import { APIheading } from '../components/APIheading';
import { ArticleSubSectionTitle } from '../components/ArticleSubSectionTitle';

export function Grid() {
  return (
    <ArticleDoc title="Grid">
      <GridContent />
    </ArticleDoc>
  );
}

export function GridContent() {
  return (
    <>
      <Paragraph>
        The Grid library has nothing to with Tron unfortunately and comprises of
        2 components for your layout needs which are the <Strong>Grid</Strong>{' '}
        component and the <Strong>GridItem</Strong> component.
      </Paragraph>

      <HR />

      <APIheading name="Grid" />
      <Paragraph>
        The Grid component comes with a gap default of 1.5em and two params
        namely <strong>columnLength</strong> and <strong>columnWidth</strong>.
      </Paragraph>

      <FlexTable
        title="Props"
        cells={[
          {
            prop: 'columnWidth',
            subProp: 'string | string[]',
            content:
              'This sets a repeating width for the grid auto columns in accordance to the width you provide.'
          },
          {
            prop: 'columnLength',
            subProp: 'number | number[]',
            content:
              ' Similar to columnWidth, except it will be in 1fr and repeats in accordance to the columnLength provided.'
          }
        ]}
      />

      <br />

      <Paragraph>
        That said, you can still set your own gridAutoColumns and style it your
        own way with the Grid component. It will only run the included
        gridAutoColumns styles when columnWidth or columnLength is passed as a
        prop.
      </Paragraph>

      <APIheading name="GridItem" />
      <Paragraph>
        GridItem, as suggested, is a component that is used to contain your
        elements within the Grid component. It includes CSS grid child style
        params to be used at your discretion. By default, it applies no styles
        unless specified.
      </Paragraph>

      <HR />

      <ArticleSubSectionTitle>Usage</ArticleSubSectionTitle>
      <Paragraph>Below are some examples of Grid in action.</Paragraph>

      <APIheading name="columnWidth" />
      <Paragraph>
        With columnWidth, GridItems will wrap around depending on your viewport
        width. You can define a single value...
      </Paragraph>

      <Syntax>{columnWidthExample}</Syntax>

      <ColumnWidthDemo />

      <Paragraph>
        Or for finer control, define an array of values that corresponds to
        breakpoints defined in your theme. Resize your browser window to see it
        in action.
      </Paragraph>

      <Syntax>{columnWidthMqExample}</Syntax>

      <ColumnWidthMqDemo />

      <HR />

      <APIheading name="columnLength" />
      <Paragraph>
        With columnLength, GridItems will retain the specified columnLength and
        resize in accordance to your viewport width.
      </Paragraph>

      <Syntax>{columnLengthExample}</Syntax>

      <ColumnLengthDemo />

      <Paragraph>
        Like its brethren columnWidth, you may also define an array of column
        lengths for finer control. Resize your browser window to see it in
        action.
      </Paragraph>

      <Syntax>{columnLengthMqExample}</Syntax>

      <ColumnLengthMqDemo />
    </>
  );
}
