import React from 'react';
import styled, { css } from 'styled-components';
import { FlexRow, FlexCol } from 'artifak';

export function FlexOffsetDemo() {
  return (
    <FlexRow>
      <FlexCol columnSize={12} offset={0}>
        <Block>
          <span>0</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={11} offset={1}>
        <Block>
          <span>1</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={10} offset={2}>
        <Block>
          <span>2</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={9} offset={3}>
        <Block>
          <span>3</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={8} offset={4}>
        <Block>
          <span>4</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={7} offset={5}>
        <Block>
          <span>5</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={6} offset={6}>
        <Block>
          <span>6</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={5} offset={7}>
        <Block>
          <span>7</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={4} offset={8}>
        <Block>
          <span>8</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={3} offset={9}>
        <Block>
          <span>9</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={2} offset={10}>
        <Block>
          <span>10</span>
        </Block>
      </FlexCol>

      <FlexCol columnSize={1} offset={11}>
        <Block>
          <span>11</span>
        </Block>
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
    margin-bottom: 5px;

    > span {
      display: block;
      color: white;
      padding: 10px;
      text-transform: uppercase;
      line-height: 1.5;
    }
  `}
`;
