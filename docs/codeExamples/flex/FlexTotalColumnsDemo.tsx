import React from 'react';
import styled, { css } from 'styled-components';
import { FlexRow, FlexCol, FlexColBaseProps } from 'artifak';

export function FlexTotalColumnsDemo() {
  return (
    <>
      <FlexRow>
        <FlexCol columnSize={[16, 8, 4]} totalColumns={16}>
          <Block>
            <span>4/16</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[16, 8, 4]} totalColumns={16}>
          <Block>
            <span>4/16</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[16, 8, 4]} totalColumns={16}>
          <Block>
            <span>4/16</span>
          </Block>
        </FlexCol>

        <FlexCol columnSize={[16, 8, 4]} totalColumns={16}>
          <Block>
            <span>4/16</span>
          </Block>
        </FlexCol>
      </FlexRow>
    </>
  );
}

type Props = {
  children: React.ReactChild | React.ReactChildren;
};

export function CustomCol({ children, ...props }: Props & FlexColBaseProps) {
  return (
    <FlexCol totalColumns={16} {...props}>
      {children}
    </FlexCol>
  );
}

export function CustomColDemo() {
  return (
    <FlexRow>
      <CustomCol columnSize={[12, 6, 4]}>
        <Block>
          <span>4/16</span>
        </Block>
      </CustomCol>
      <CustomCol columnSize={[12, 6, 4]}>
        <Block>
          <span>4/16</span>
        </Block>
      </CustomCol>
      <CustomCol columnSize={[12, 6, 4]}>
        <Block>
          <span>4/16</span>
        </Block>
      </CustomCol>
      <CustomCol columnSize={[12, 6, 4]}>
        <Block>
          <span>4/16</span>
        </Block>
      </CustomCol>
    </FlexRow>
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
