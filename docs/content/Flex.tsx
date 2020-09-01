import {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Strong,
  SmallLead
} from '../components/Typography';

import { Syntax, ParamsDescription } from '../components/Syntax';

import {
  FlexColumnSizingDemo,
  flexColumnSizingUsage,
  FlexOffsetDemo,
  flexOffsetUsage,
  FlexTotalColumnsDemo,
  flexTotalColumnsUsage,
  FlexAlignmentDemo,
  flexAlignmentUsage
} from '../codeExamples/flex';

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

      <H4>Props</H4>
      <SmallLead>reverse: boolean</SmallLead>

      <Paragraph>FlexRow acts a parent container to FlexCol.</Paragraph>

      <H3>FlexCol</H3>
      <Paragraph>
        FlexCol is where most of the heavy lifting is. FlexCol will require
        being wrapped in FlexRow in order to work.
      </Paragraph>

      <H4>Props</H4>
      <SmallLead>col: number | number[]</SmallLead>
      <Paragraph>
        The &nbsp;
        <Strong>columnSize</Strong> prop defines the size of the column. This
        will be the most common prop you will defining for FlexCol.You may
        define this as a single number or an array of numbers for responsive.
      </Paragraph>

      <SmallLead>offset: number | number[]</SmallLead>
      <Paragraph>
        The &nbsp;
        <Strong>offset</Strong> prop lets offset your columns. You may define
        this as a single number or an array of numbers for responsive.
      </Paragraph>

      <SmallLead>gutterWidth: number | number[]</SmallLead>
      <Paragraph>
        The &nbsp;
        <Strong>gutterWidth</Strong> prop defines padding for your columns. Note
        that the number value provided is the total between left and right
        paddings. Again, array of numbers for responsive.
      </Paragraph>

      <SmallLead>totalColumns: number</SmallLead>
      <Paragraph>
        The &nbsp;
        <Strong>totalColumns</Strong> prop lets you define the total number of
        columns to be used as a basis. This defaults to 12.
      </Paragraph>

      <H2>Usage</H2>

      <H3>ColumnSizing</H3>
      <Syntax>{flexColumnSizingUsage}</Syntax>
      <FlexColumnSizingDemo />

      <H3>Offsetting</H3>
      <Syntax>{flexOffsetUsage}</Syntax>
      <FlexOffsetDemo />

      <H3>Total Columns</H3>
      <Paragraph>
        totalColumns is available should you need to be more specific with your
        column count.
      </Paragraph>
      <Syntax>{flexTotalColumnsUsage}</Syntax>
      <FlexTotalColumnsDemo />

      <H3>Alignment, Distribution, Ordering, etc.</H3>
      <Paragraph>
        As this is based off of styled-system, you can basically assign CSS flex
        alignment or justify properties directly onto FlexCol.
      </Paragraph>

      <Syntax>{flexAlignmentUsage}</Syntax>

      <FlexAlignmentDemo />
    </>
  );
}
