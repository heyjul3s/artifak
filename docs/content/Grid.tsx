import {
  H1,
  H2,
  H3,
  H4,
  SmallLead,
  Paragraph,
  LargeLead,
  SmallParagraph,
  Strong
} from '../components/Typography';

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

import { FlexRow, FlexCol } from 'artifak';

export function Grid() {
  return (
    <>
      <H1>Grid</H1>

      <Paragraph>
        The Grid library has nothing to with Tron unfortunately and comprises of
        2 components for your layout needs which are the <Strong>Grid</Strong>{' '}
        component and the <Strong>GridItem</Strong> component.
      </Paragraph>

      <H3>Grid</H3>

      <Paragraph>
        The Grid component comes with a gap default of 1.5em and two params
        namely <strong>columnLength</strong> and <strong>columnWidth</strong>.
      </Paragraph>

      <FlexRow
        p={'30px 30px 10px'}
        mb={'1rem'}
        style={{
          border: '1px solid black'
        }}
      >
        <FlexCol columnSize={12} gutterWidth={0}>
          <H4>Props</H4>
        </FlexCol>

        <FlexCol columnSize={[12, 5, 4]} gutterWidth={0}>
          <SmallLead mb={'0.15rem'}>columnWidth</SmallLead>
          <SmallParagraph>string | string[]</SmallParagraph>
        </FlexCol>

        <FlexCol columnSize={[12, 7, 8]} gutterWidth={0}>
          <Paragraph>
            This sets a repeating width for the grid auto columns in accordance
            to the width you provide.
          </Paragraph>
        </FlexCol>

        <FlexCol columnSize={[12, 5, 4]} gutterWidth={0}>
          <SmallLead mb={'0.15rem'}>columnLength</SmallLead>
          <SmallParagraph>number | number[]</SmallParagraph>
        </FlexCol>

        <FlexCol columnSize={[12, 7, 8]} gutterWidth={0}>
          <Paragraph>
            Similar to columnWidth, except it will be in 1fr and repeats in
            accordance to the columnLength provided.
          </Paragraph>
        </FlexCol>
      </FlexRow>

      <br />

      <Paragraph>
        That said, you can still set your own gridAutoColumns and style it your
        own way with the Grid component. It will only run the included
        gridAutoColumns styles when columnWidth or columnLength is passed as a
        prop.
      </Paragraph>

      <H3>GridItem</H3>

      <Paragraph>
        GridItem, as suggested, is a component that is used to contain your
        elements within the Grid component. It includes CSS grid child style
        params to be used at your discretion. By default, it applies no styles
        unless specified.
      </Paragraph>

      <H2>Usage</H2>
      <Paragraph>
        Below are some examples of Grid in action. Note that{' '}
      </Paragraph>

      <LargeLead>columnWidth</LargeLead>

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

      <br />

      <LargeLead>columnLength</LargeLead>

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
