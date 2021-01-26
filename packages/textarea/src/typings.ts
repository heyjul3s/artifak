import { HTMLAttributes } from 'react';

export type TextAreaProps = {
  autoResize?: boolean;
  isResizable?: boolean;
  maxRows?: number;
  minRows?: number;
  value?: string;
} & HTMLAttributes<HTMLTextAreaElement>;
