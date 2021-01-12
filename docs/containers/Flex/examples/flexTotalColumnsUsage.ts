export const flexTotalColumnsUsage = `
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
`;

export const customColUsage = `
  type Props = {
    children: React.ReactChild | React.ReactChildren;
  };

  export function Col({ children, ...props }: Props & FlexColBaseProps) {
    return (
      <FlexCol totalColumns={16} {...props}>
        {children}
      </FlexCol>
    );
  }
`;
