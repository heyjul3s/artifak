import {
  Paragraph,
  Strong,
  HR,
  Doc,
  Syntax,
  APIheading,
  FlexTable,
  ArticleSubSectionTitle
} from '@components';

import {
  FlexColumnSizingDemo,
  flexColumnSizingUsage,
  FlexOffsetDemo,
  flexOffsetUsage,
  FlexTotalColumnsDemo,
  flexTotalColumnsUsage,
  FlexAlignmentDemo,
  flexAlignmentUsage,
  CustomColDemo,
  customColUsage
} from './examples';

export function Flex() {
  return (
    <Doc title="Flex">
      <FlexContent />
    </Doc>
  );
}

export function FlexContent() {
  return (
    <>
      <Paragraph>
        The Flex library provides 2 components for usage:{' '}
        <Strong>FlexRow</Strong> and <Strong>FlexCol</Strong>. Basically these
        serve purposes similar to the Grid components but via CSS flexbox.
      </Paragraph>

      <HR />

      <APIheading name="FlexRow" />
      <Paragraph>FlexRow acts a parent container to FlexCol.</Paragraph>

      <FlexTable
        title="Props"
        cells={[
          {
            prop: 'reverse',
            subProp: 'boolean',
            content: 'Sets the row in reverse when true.'
          }
        ]}
      />

      <APIheading name="FlexCol" />
      <Paragraph>
        FlexCol is where most of the heavy lifting is. FlexCol will require
        being wrapped in FlexRow in order to work.
      </Paragraph>

      <FlexTable
        title="Props"
        cells={[
          {
            prop: 'columnSize',
            subProp: 'number | number[]',
            content:
              'The columnSize prop defines the size of the column. This will be the most common prop you will defining for FlexCol.You may define this as a single number or an array of numbers for responsive.'
          },
          {
            prop: 'offset',
            subProp: 'number | number[]',
            content:
              'The offset prop lets offset your columns. You may define this as a single number or an array of numbers for responsive.'
          },
          {
            prop: 'gutterWidth',
            subProp: 'number | number[]',
            content:
              ' The gutterWidth prop defines padding for your columns. Note that the number value provided is the total between left and right paddings. Again, array of numbers for responsive and yes, you can set it to 0.'
          },
          {
            prop: 'totalColumns',
            subProp: 'number',
            content:
              'The totalColumns prop lets you define the total number of columns to be used as a basis. This defaults to 12.'
          }
        ]}
      />

      <ArticleSubSectionTitle>Usage</ArticleSubSectionTitle>
      <Paragraph>
        Below are examples of how to use the Flex components.
      </Paragraph>

      <APIheading name="Column Sizing" />
      <Paragraph>
        Below are examples of how to use the columnSizing prop, with default
        totalColumns of 12.
      </Paragraph>
      <Syntax>{flexColumnSizingUsage}</Syntax>
      <FlexColumnSizingDemo />

      <HR />

      <APIheading name="Offsetting" />
      <Paragraph>
        Offsets work in tandem with columnSizing. Adjust accordingly if you
        using a custom number of columns.
      </Paragraph>
      <Syntax>{flexOffsetUsage}</Syntax>
      <FlexOffsetDemo />

      <HR />

      <APIheading name="Total Columns" />
      <Paragraph>
        Depending on design, sometimes you might need a more specific column
        count. The totalColumns prop is available for such occasions. Below is
        an example that sets the total columns to 16 instead of using the
        default 12 columns.
      </Paragraph>
      <Syntax>{flexTotalColumnsUsage}</Syntax>
      <FlexTotalColumnsDemo />

      <HR />

      <Paragraph>
        You can also wrap up FlexCol so that you don't need to define it in
        every FlexCol. Below is a somewhat contrived example.
      </Paragraph>

      <Syntax>{customColUsage}</Syntax>

      <CustomColDemo />

      <HR />

      <APIheading name="Alignment, Distribution, Ordering, etc." />
      <Paragraph>
        As this is based off of styled-system, you can basically assign CSS flex
        alignment or justify properties directly onto FlexRow or FlexCol.
      </Paragraph>

      <Syntax>{flexAlignmentUsage}</Syntax>
      <FlexAlignmentDemo />

      <br />
    </>
  );
}
