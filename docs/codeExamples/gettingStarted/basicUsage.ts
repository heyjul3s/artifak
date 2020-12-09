export const basicUsage = `
  import React from 'react';
  import { BlockBase, Image } from 'artifak';

  export function Card({
    img,
    alt,
    title,
    description
  }) {
    return (
      <BlockBase>
        <Image src={img} alt={alt}
        <h3>{title}</h3>
        <p>{content}</p>
      </BlockBase>
    )
  }
`