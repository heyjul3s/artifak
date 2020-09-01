import React from 'react';
import styled, { css } from 'styled-components';
import { FlexRow, FlexCol } from 'artifak';

export function FlexColumnSizingDemo() {
  return (
    <>
      <FlexRow>
        <FlexCol columnSize={[12, 6, 3]}>
          <Block />
        </FlexCol>

        <FlexCol columnSize={[12, 6, 3]}>
          <Block />
        </FlexCol>

        <FlexCol columnSize={[12, 6, 3]}>
          <Block />
        </FlexCol>

        <FlexCol columnSize={[12, 6, 3]}>
          <Block />
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol columnSize={[12, 6, 4]}>
          <Block />
        </FlexCol>

        <FlexCol columnSize={[12, 6, 4]}>
          <Block />
        </FlexCol>

        <FlexCol columnSize={[12, 6, 4]}>
          <Block />
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol columnSize={[12, 6]}>
          <Block />
        </FlexCol>

        <FlexCol columnSize={[12, 6]}>
          <Block />
        </FlexCol>
      </FlexRow>
    </>
  );
}

const Block = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: 100%;
    height: 40px;
    background: ${theme.colors.primary};
  `}
`;
