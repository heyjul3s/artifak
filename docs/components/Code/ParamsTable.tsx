import React from 'react';
import { FlexRow, FlexCol, useMatchMedia } from 'artifak';
import { Paragraph, SmallParagraph, SmallLead } from '../Typography';
import { theme } from '../../theme';

type Props = {
  APIname: string;
  APItypes?: string;
  cells: any;
};

export function ParamsTable({ APIname, APItypes, cells }: Props) {
  const isMobile = useMatchMedia('(any-hover: none)');

  return (
    <div
      style={{
        marginBottom: '1rem',
        padding: '30px 30px 10px',
        border: `1px solid ${theme.colors.extraLightGrey}`
      }}
    >
      {!isMobile && (
        <>
          <FlexRow>
            <FlexCol columnSize={[12, 2]} gutterWidth={0}>
              <SmallLead style={{ marginBottom: '0.5rem' }}>Name</SmallLead>
            </FlexCol>
            <FlexCol columnSize={[12, 3]} gutterWidth={0}>
              <SmallLead style={{ marginBottom: '0.5rem' }}>Type</SmallLead>
            </FlexCol>
            <FlexCol columnSize={[12, 2]} gutterWidth={0}>
              <SmallLead style={{ marginBottom: '0.5rem' }}>Default</SmallLead>
            </FlexCol>
            <FlexCol columnSize={[12, 5]} gutterWidth={0}>
              <SmallLead style={{ marginBottom: '0.5rem' }}>
                Description
              </SmallLead>
            </FlexCol>
          </FlexRow>
          <hr style={{ marginBottom: '1.5rem' }} />
        </>
      )}

      {cells.map((cell, i) => {
        const { name, type, defaultValue, content } = cell;

        return (
          <div key={`param-cell-${name}-${i}`}>
            <FlexRow>
              <FlexCol columnSize={[12, 2]} gutterWidth={0} pb={'1em'}>
                {isMobile && <SmallLead>Name</SmallLead>}
                <Paragraph mb={'0.15rem'}>{name}</Paragraph>
              </FlexCol>

              <FlexCol columnSize={[12, 3]} gutterWidth={0} pb={'1em'}>
                {isMobile && <SmallLead>Type</SmallLead>}
                <SmallParagraph mb={'0.15rem'}>{type}</SmallParagraph>
              </FlexCol>

              <FlexCol columnSize={[12, 2]} gutterWidth={0} pb={'1em'}>
                {isMobile && <SmallLead>Default</SmallLead>}
                <Paragraph mb={'0.15rem'}>{defaultValue}</Paragraph>
              </FlexCol>

              <FlexCol columnSize={[12, 5]} gutterWidth={0} pb={'1em'}>
                {isMobile && <SmallLead>Description</SmallLead>}
                <Paragraph mb={'0.15rem'}>{content}</Paragraph>
              </FlexCol>
            </FlexRow>

            {isMobile && i < cells.length - 1 && (
              <>
                <hr />
                <br />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
