import React from 'react';
import styled, { css } from 'styled-components';
import { FlexRow, FlexCol, FlexColBaseProps } from 'artifak';

export function FlexTotalColumnsDemo() {
  return (
    <>
      <FlexRow>
        <FlexCol columnSize={[16, 8, 4]} totalColumns={16}>
          <Block />
        </FlexCol>

        <FlexCol columnSize={[16, 8, 4]} totalColumns={16}>
          <Block />
        </FlexCol>

        <FlexCol columnSize={[16, 8, 4]} totalColumns={16}>
          <Block />
        </FlexCol>

        <FlexCol columnSize={[16, 8, 4]} totalColumns={16}>
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
    height: 30px;
    background: ${theme.colors.primary};
  `}
`;
