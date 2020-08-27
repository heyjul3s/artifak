import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { theme } from '../theme';

type Props = {
  href: string;
  openAsNewTab?: boolean;
  variant?: string;
  children: React.ReactChild | React.ReactChildren;
};

export const AnchorLink: React.FC<Props> = ({
  href,
  openAsNewTab,
  children,
  variant,
  ...props
}) => {
  const targetBlank = !!openAsNewTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  const isDisabled = !!variant ? variant : void 0;

  return (
    <Anchor href={href} variant={isDisabled} {...targetBlank} {...props} as="a">
      {children}
    </Anchor>
  );
};

export const Anchor = styled('a')<Props>(
  {
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 400ms ease-out',
    color: theme.colors.text,
    fontWeight: theme.fontWeight.bold,
    '&:hover': theme.colors.black
  },
  variant({
    variants: {
      disabled: {
        color: theme.colors.disabled,
        pointerEvents: 'none',
        cursor: 'text'
      }
    }
  })
);
