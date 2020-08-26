import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  href: string;
  openAsNewTab?: boolean;
  children: React.ReactChild | React.ReactChildren;
};

export const AnchorLink: React.FC<Props> = ({
  href,
  openAsNewTab,
  children,
  ...props
}) => {
  const targetBlank = !!openAsNewTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Anchor href={href} {...targetBlank} {...props} as="a">
      {children}
    </Anchor>
  );
};

export const Anchor = styled.a<Props>`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-weight: ${theme.fontWeight.bold};

    &:hover {
      color: ${theme.colors.black};
    }
  `}

  display: block;
  cursor: pointer;
  text-decoration: none;
  transition: color 400ms ease-out;
`;
