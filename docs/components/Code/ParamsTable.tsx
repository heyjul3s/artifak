import React from 'react';
import { FlexRow, FlexCol } from 'artifak';
import { H4, Paragraph, SmallParagraph, SmallLead } from '../Typography';
import { useMatchMedia } from '../../hooks';

export function ParamsTable({ APIname, APItypes, cells }) {
  const isMobile = useMatchMedia('(any-hover: none)');

  return (
    <div
      style={{
        marginBottom: '1rem',
        padding: '30px 30px 10px',
        border: '1px solid black'
      }}
    >
      <H4 display="inline-block" verticalAlign="middle">
        {APIname} &nbsp;
      </H4>

      <SmallParagraph
        display="inline-block"
        verticalAlign="middle"
        mt={'0.5rem'}
      >
        {APItypes}
      </SmallParagraph>

      <hr style={{ marginBottom: '1.5rem' }} />

      {!isMobile && (
        <FlexRow>
          <FlexCol columnSize={[12, 2]} gutterWidth={0}>
            <SmallLead>Name</SmallLead>
          </FlexCol>
          <FlexCol columnSize={[12, 3]} gutterWidth={0}>
            <SmallLead>Type</SmallLead>
          </FlexCol>
          <FlexCol columnSize={[12, 2]} gutterWidth={0}>
            <SmallLead>Default</SmallLead>
          </FlexCol>
          <FlexCol columnSize={[12, 5]} gutterWidth={0}>
            <SmallLead>Description</SmallLead>
          </FlexCol>
        </FlexRow>
      )}

      {cells.map((cell, i) => {
        const { name, type, defaultValue, content } = cell;

        return (
          <>
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
          </>
        );
      })}
    </div>
  );
}
