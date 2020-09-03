import React from 'react';
import styled, { css } from 'styled-components';
import { FlexRow, FlexCol } from 'artifak';

export function FlexColumnSizingDemo() {
  return (
    <>
      <FlexRow pb={'1rem'}>
        <FlexCol columnSize={[12, 6, 3]}>
          <Block>
            <span>3</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[12, 6, 3]}>
          <Block>
            <span>3</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[12, 6, 3]}>
          <Block>
            <span>3</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[12, 6, 3]}>
          <Block>
            <span>3</span>
          </Block>
        </FlexCol>
      </FlexRow>

      <FlexRow pb={'1rem'}>
        <FlexCol columnSize={[12, 6, 4]}>
          <Block>
            <span>4</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[12, 6, 4]}>
          <Block>
            <span>4</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[12, 6, 4]}>
          <Block>
            <span>4</span>
          </Block>
        </FlexCol>
      </FlexRow>

      <FlexRow pb={'1rem'}>
        <FlexCol columnSize={[12, 6]}>
          <Block>
            <span>6</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[12, 6]}>
          <Block>
            <span>6</span>
          </Block>
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol columnSize={[12, 4]}>
          <Block>
            <span>4</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[12, 8]}>
          <Block>
            <span>8</span>
          </Block>
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

    > span {
      display: block;
      color: white;
      padding: 10px;
      text-transform: uppercase;
      line-height: 1.5;
    }
  `}
`;
