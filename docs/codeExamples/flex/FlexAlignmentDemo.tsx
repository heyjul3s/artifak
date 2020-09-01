import React from 'react';
import styled, { css } from 'styled-components';
import { FlexRow, FlexCol, FlexColBaseProps } from 'artifak';

export function FlexAlignmentDemo() {
  return (
    <>
      <FlexRow justifyContent={['flex-start', 'center']} alignItems="center">
        <FlexCol columnSize={[12, 6, 4]} totalColumns={16}>
          <Block1 />
        </FlexCol>

        <FlexCol columnSize={[12, 6, 4]} totalColumns={16}>
          <Block2 />
        </FlexCol>
      </FlexRow>
    </>
  );
}

const Block1 = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: 100%;
    height: 40px;
    background: ${theme.colors.primary};
  `}
`;

const Block2 = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: 100%;
    height: 20px;
    background: ${theme.colors.primary};
  `}
`;
