import styled from 'styled-components';
import { Paragraph } from './Typography';

type Props = {
  as?: 'ul' | 'ol';
  listStyleType?: 'disc';
  data: string[];
};

export function List({ as = 'ul', data, listStyleType = 'disc' }: Props) {
  return (
    <ListBase as={as} listStyleType={listStyleType}>
      {data.map((datum, i) => (
        <ListItem key={`list-item-${i}`}>
          <Paragraph>{datum}</Paragraph>
        </ListItem>
      ))}
    </ListBase>
  );
}

const ListBase = styled.div<{ listStyleType?: 'disc' }>`
  list-style-type: ${({ listStyleType }) =>
    !!listStyleType ? listStyleType : 'none'};

  padding-bottom: 1em;

  > li:last-child {
    padding-bottom: 0;
  }
`;

const ListItem = styled.li`
  padding-bottom: 1em;

  > p {
    margin-bottom: 0;
  }
`;
