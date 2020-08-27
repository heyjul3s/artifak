import { H1, H2, H3, Paragraph, LargeLead } from '../components/Typography';
import { Syntax, Params } from '../components/Syntax';
import { List } from '../components/List';
import { gridExampleUsage } from '../strings/grid/grid';
import {
  GridColumnWidthDemo,
  GridColumnLengthDemo
} from '../strings/grid/GridDemo';

export function Grid() {
  return (
    <>
      <H1>Grid</H1>
      <Paragraph>
        The Grid library comprises of 2 components for your layout needs which
        are <strong>Grid</strong> and <strong>GridItem</strong>.
      </Paragraph>
      <LargeLead>Grid</LargeLead>
      <Params
        properties={{
          columnLength: 'number | number[]',
          columnWidth: 'string | string[]'
        }}
      />
      <Paragraph>
        The Grid component comes with a gap default of 1.5em and two properties
        namely <strong>columnLength</strong> and <strong>columnWidth</strong>.
      </Paragraph>
      <LargeLead>GridItem</LargeLead>
      <Paragraph>
        GridItem, as suggested, is a component that is used to contain your
        elements within the Grid component. It has all CSS grid style properties
        at your disposal. By default, it applies no styles unless specified.
      </Paragraph>
      <H2>Usage</H2>
      <LargeLead>columnWidth</LargeLead>
      <Paragraph>
        With columnWidth, GridItems will wrap around depending on your viewport
        width.
      </Paragraph>
      <Syntax>{gridExampleUsage}</Syntax>

      <Paragraph>Below is an example of the Grid behaviour.</Paragraph>
      <GridColumnWidthDemo />

      <LargeLead>columnLength</LargeLead>
      <Paragraph>
        With columnLength, GridItems will retain the specified columnLength and
        resize in accordance to your viewport width.
      </Paragraph>
      <Syntax>{gridExampleUsage}</Syntax>
      <Paragraph>Below is an example of the Grid behaviour.</Paragraph>
      <GridColumnLengthDemo />
    </>
  );
}
