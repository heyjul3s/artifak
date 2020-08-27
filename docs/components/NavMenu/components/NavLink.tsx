import Link from 'next/link';
import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

type Props = {
  marker: string;
  name: string;
  query: { content: string };
};

export function NavLink({ marker, name, query }: Props) {
  const markerPadRight = marker === '01' ? '1.2em' : '1em';

  return (
    <Link href={{ pathname: '/', query }}>
      <NextLinkAnchor>
        {!!marker && <Marker pr={markerPadRight}>{marker}</Marker>}
        {name}
      </NextLinkAnchor>
    </Link>
  );
}

const NextLinkAnchor = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  transition: color 400ms ease-out;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.poppins};
    font-size: 20px;

    &:hover {
      color: ${theme.colors.black};
    }
  `}
`;

const Marker = styled.span<SpaceProps>(space);
