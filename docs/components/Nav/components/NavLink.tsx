import Link from 'next/link';
import styled, { css } from 'styled-components';

type Props = {
  name: string;
  query: { content: string };
};

export function NavLink({ name, query }: Props) {
  return (
    <Link href={{ pathname: '/', query }}>
      <NextLinkAnchor>
        <LinkText>{name}</LinkText>
      </NextLinkAnchor>
    </Link>
  );
}

const NextLinkAnchor = styled.a`
  display: inline-block;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  transition: color 400ms ease-out;
  position: relative;
  margin: 0 1em;
  transition: color 300ms ease-out;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.poppins};
    font-size: 20px;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

const LinkText = styled.span`
  position: relative;
  left: 0;
  transition: left 300ms ease-out;
`;
