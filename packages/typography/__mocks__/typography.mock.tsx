import React from 'react';

export const mockTypographyStyles = {
  H1: {
    marginBottom: [15],
    as: 'h1',
  },

  H2: {
    marginTop: 0,
    as: 'h2',
  },
};

export const H1 = (props): React.ReactElement => (
  <h1 {...props}>{props.children}</h1>
);

export const H2 = (props): React.ReactElement => (
  <h2 {...props}>{props.children}</h2>
);
