/* istanbul ignore file */

export const supportsObjectFit =
  !!(window as any).CSS &&
  !!CSS.supports &&
  !!CSS.supports('object-fit', 'cover') &&
  !!CSS.supports('object-position', '0 0');
