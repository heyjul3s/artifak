import React from 'react';
import styled, { css } from 'styled-components';
import { FlexRow, FlexCol } from 'artifak';

export function FlexOffsetDemo() {
  return (
    <FlexRow>
      <FlexCol columnSize={12} offset={0}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={11} offset={1}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={10} offset={2}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={9} offset={3}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={8} offset={4}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={7} offset={5}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={6} offset={6}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={5} offset={7}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={4} offset={8}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={4} offset={9}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={3} offset={10}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={2} offset={10}>
        <Block />
      </FlexCol>

      <FlexCol columnSize={1} offset={11}>
        <Block />
      </FlexCol>
    </FlexRow>
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
