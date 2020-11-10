export enum MediaInputQueryKeys {
  'anyHover' = 'anyHover',
  'anyHoverNone' = 'anyHoverNone',
  'hover' = 'hover',
  'hoverNone' = 'hoverNone',
  'anyPointer' = 'anyPointer',
  'anyPointerNone' = 'anyPointerNone',
  'pointer' = 'pointer',
  'pointerNone' = 'pointerNone'
}

export type MediaInputQueries = {
  [MediaInputQueryKeys.anyHover]: AnyHover;
  [MediaInputQueryKeys.anyHoverNone]: AnyHoverNone;
  [MediaInputQueryKeys.anyPointer]: AnyPointer;
  [MediaInputQueryKeys.anyPointerNone]: AnyPointerNone;
  [MediaInputQueryKeys.hover]: Hover;
  [MediaInputQueryKeys.hoverNone]: HoverNone;
  [MediaInputQueryKeys.pointer]: Pointer;
  [MediaInputQueryKeys.pointerNone]: PointerNone;
};

export type AnyHover = 'any-hover: hover';
export type AnyHoverNone = 'any-hover: none';
export type AnyPointer = 'any-pointer: pointer';
export type AnyPointerNone = 'any-pointer: none';
export type DisplayModeBrowser = 'display-mode: browser';
export type DisplayModeFullScreen = 'display-mode: fullscreen';
export type DisplayModeMinUI = 'display-mode: minimal-ui';
export type DisplayModeStandalone = 'display-mode: standalone';
export type Hover = 'hover: hover';
export type HoverNone = 'hover: none';
export type OrientationLandscape = 'orientation: landscape';
export type OrientationPortrait = 'orientation: portrait';
export type Pointer = 'pointer: pointer';
export type PointerNone = 'pointer: none';

export const mediaInputQueries: MediaInputQueries = {
  [MediaInputQueryKeys.anyHover]: 'any-hover: hover',
  [MediaInputQueryKeys.anyHoverNone]: 'any-hover: none',
  [MediaInputQueryKeys.hover]: 'hover: hover',
  [MediaInputQueryKeys.hoverNone]: 'hover: none',
  [MediaInputQueryKeys.anyPointer]: 'any-pointer: pointer',
  [MediaInputQueryKeys.anyPointerNone]: 'any-pointer: none',
  [MediaInputQueryKeys.pointer]: 'pointer: pointer',
  [MediaInputQueryKeys.pointerNone]: 'pointer: none'
};
