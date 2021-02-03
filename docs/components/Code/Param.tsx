import { H4, SmallParagraph } from '../Typography';

type Props = {
  name: string;
  types?: string;
};

export function Param({ name, types }: Props) {
  return (
    <>
      <H4 display="inline-block" verticalAlign="middle" mb={0}>
        {name} &nbsp;
      </H4>

      <SmallParagraph
        display="inline-block"
        verticalAlign="middle"
        mt={'0.5rem'}
      >
        {types}
      </SmallParagraph>
    </>
  );
}
