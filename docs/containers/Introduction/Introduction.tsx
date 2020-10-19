import React from 'react';
import { About, Features, Installation, Modules, Specs } from './content';

export function Introduction() {
  return (
    <>
      <About />
      <Installation />
      <Features />
      <Modules />
      <Specs />
    </>
  );
}
