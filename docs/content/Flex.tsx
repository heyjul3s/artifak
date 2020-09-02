import {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Strong,
  SmallLead,
  SmallParagraph
} from '../components/Typography';

import { Syntax } from '../components/Syntax';

import {
  FlexColumnSizingDemo,
  flexColumnSizingUsage,
  FlexOffsetDemo,
  flexOffsetUsage,
  FlexTotalColumnsDemo,
  flexTotalColumnsUsage
  // FlexAlignmentDemo,
  // flexAlignmentUsage
} from '../codeExamples/flex';

import { FlexRow, FlexCol } from 'artifak';

export function Flex() {
  return (
    <>
      <H1>Flex</H1>
      <Paragraph>
        The Flex library provides 2 components for usage: FlexRow and FlexCol.
        Basically these serve purposes similar to the Grid components but via
        CSS flexbox.
      </Paragraph>

      <H3>FlexRow</H3>
      <Paragraph>FlexRow acts a parent container to FlexCol.</Paragraph>

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
          <SmallLead mb={'0.15rem'}>reverse</SmallLead>
          <SmallParagraph>boolean</SmallParagraph>
        </FlexCol>

        <FlexCol columnSize={[12, 7, 8]} gutterWidth={0}>
          <Paragraph>Sets the row in reverse when true.</Paragraph>
        </FlexCol>
      </FlexRow>

      <H3>FlexCol</H3>
      <Paragraph>
        FlexCol is where most of the heavy lifting is. FlexCol will require
        being wrapped in FlexRow in order to work.
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
          <SmallLead mb={'0.15rem'}>columnSize</SmallLead>
          <SmallParagraph>number | number[]</SmallParagraph>
        </FlexCol>

        <FlexCol columnSize={[12, 7, 8]} gutterWidth={0}>
          <Paragraph>
            The &nbsp;
            <Strong>columnSize</Strong> prop defines the size of the column.
            This will be the most common prop you will defining for FlexCol.You
            may define this as a single number or an array of numbers for
            responsive.
          </Paragraph>
        </FlexCol>

        <FlexCol columnSize={[12, 5, 4]} gutterWidth={0}>
          <SmallLead mb={'0.15rem'}>offset</SmallLead>
          <SmallParagraph>number | number[]</SmallParagraph>
        </FlexCol>

        <FlexCol columnSize={[12, 7, 8]} gutterWidth={0}>
          <Paragraph>
            The &nbsp;
            <Strong>offset</Strong> prop lets offset your columns. You may
            define this as a single number or an array of numbers for
            responsive.
          </Paragraph>
        </FlexCol>

        <FlexCol columnSize={[12, 5, 4]} gutterWidth={0}>
          <SmallLead mb={'0.15rem'}>gutterWidth</SmallLead>
          <SmallParagraph>number | number[]</SmallParagraph>
        </FlexCol>

        <FlexCol columnSize={[12, 7, 8]} gutterWidth={0}>
          <Paragraph>
            The &nbsp;
            <Strong>gutterWidth</Strong> prop defines padding for your columns.
            Note that the number value provided is the total between left and
            right paddings. Again, array of numbers for responsive and yes, you
            can set it to 0.
          </Paragraph>
        </FlexCol>

        <FlexCol columnSize={[12, 5, 4]} gutterWidth={0}>
          <SmallLead mb={'0.15rem'}>totalColumns: number</SmallLead>
          <SmallParagraph>number</SmallParagraph>
        </FlexCol>

        <FlexCol columnSize={[12, 7, 8]} gutterWidth={0}>
          <Paragraph>
            The &nbsp;
            <Strong>totalColumns</Strong> prop lets you define the total number
            of columns to be used as a basis. This defaults to 12.
          </Paragraph>
        </FlexCol>
      </FlexRow>

      <H2>Usage</H2>
      <Paragraph>
        Below are examples of how to use the Flex components.
      </Paragraph>

      <H3>Column Sizing</H3>
      <Syntax>{flexColumnSizingUsage}</Syntax>
      <FlexColumnSizingDemo />

      <br />

      <H3>Offsetting</H3>
      <Syntax>{flexOffsetUsage}</Syntax>
      <FlexOffsetDemo />

      <H3>Total Columns</H3>
      <Paragraph>
        Depending on design, sometimes you might need a more specific column
        count. The totalColumns prop is available for such occasions.
      </Paragraph>
      <Syntax>{flexTotalColumnsUsage}</Syntax>
      <FlexTotalColumnsDemo />

      <br />

      {/* <H3>Alignment, Distribution, Ordering, etc.</H3>
      <Paragraph>
        As this is based off of styled-system, you can basically assign CSS flex
        alignment or justify properties directly onto FlexCol.
      </Paragraph>

      <Syntax>{flexAlignmentUsage}</Syntax>
      <FlexAlignmentDemo /> */}

      <br />
    </>
  );
}
