import React from 'react';
import { Textarea } from './src';

export function TextareaBasicUsage() {
  return (
    <>
      <Textarea isResizable={false} autoResize={true} />
    </>
  );
}

export default {
  title: 'Textarea'
};
