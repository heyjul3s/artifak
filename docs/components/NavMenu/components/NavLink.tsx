import Link from 'next/link';
import styled, { css } from 'styled-components';

type Props = {
  name: string;
  query: { content: string };
};

export function NavLink({ name, query }: Props) {
  return (
    <Link href={{ pathname: '/', query }}>
      <NextLinkAnchor>{name}</NextLinkAnchor>
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
