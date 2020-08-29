import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Marker } from '../styled';

type Props = {
  name: string;
  query: { content: string };
};

export function NavLink({ name, query }: Props) {
  return (
    <Link href={{ pathname: '/', query }}>
      <NextLinkAnchor>
        <Marker />
        <LinkText>{name}</LinkText>
      </NextLinkAnchor>
    </Link>
  );
}

const NextLinkAnchor = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  transition: color 400ms ease-out;
  position: relative;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.poppins};
    font-size: 20px;

    &:hover {
      ${LinkText} {
        left: 22px;
      }

      ${Marker} {
        transform: scale(1);
      }
    }
  `}
`;

const LinkText = styled.span`
  position: relative;
  left: 0;
  transition: left 300ms ease-out;
`;
