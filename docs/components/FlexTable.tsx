import React from 'react';
import { FlexRow, FlexCol } from 'artifak';
import { theme } from '../theme';

import {
  H4,
  Paragraph,
  SmallLead,
  SmallParagraph
} from '../components/Typography';

type Props = {
  title?: string;
  cells: { prop: string; subProp?: string; content: string }[];
};

export function FlexTable({ title, cells }: Props) {
  return (
    <FlexRow
      p={'30px 30px 10px'}
      mb={'1rem'}
      style={{
        border: `1px solid ${theme.colors.extraLightGrey}`
      }}
    >
      {!!title && <FlexTableTitle title={title} />}

      {!!cells &&
        cells.length &&
        cells.map((cell, i) => {
          const { prop, subProp, content } = cell;
          return (
            <FlexTableCell
              key={`cell-${prop}-${i}`}
              prop={prop}
              subProp={subProp}
              content={content}
            />
          );
        })}
    </FlexRow>
  );
}

export function FlexTableTitle({ title }) {
  return (
    <FlexCol columnSize={12} gutterWidth={0}>
      <H4>{title}</H4>
    </FlexCol>
  );
}

export function FlexTableCell({ prop, subProp, content }) {
  return (
    <>
      <FlexCol columnSize={[12, 5, 4]} gutterWidth={0}>
        <SmallLead mt={0} mb={'0.15rem'}>
          {prop}
        </SmallLead>
        <SmallParagraph mt={0}>{subProp}</SmallParagraph>
      </FlexCol>

      <FlexCol columnSize={[12, 7, 8]} gutterWidth={0}>
        <Paragraph mt={0}>{content}</Paragraph>
      </FlexCol>
    </>
  );
}
