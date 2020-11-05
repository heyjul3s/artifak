export enum MediaDeviceQueryKeys {
  'landscape' = 'landscape',
  'portrait' = 'portrait',
  'anyHover' = 'anyHover',
  'anyHoverNone' = 'anyHoverNone',
  'hover' = 'hover',
  'hoverNone' = 'hoverNone',
  'anyPointer' = 'anyPointer',
  'anyPointerNone' = 'anyPointerNone',
  'pointer' = 'pointer',
  'pointerNone' = 'pointerNone',
  'displayFullScreen' = 'displayFullScreen',
  'displayStandalone' = 'displayStandalone',
  'displayMinUI' = 'displayMinUI',
  'displayBrowser' = 'displayBrowser'
}

export type MediaDeviceQueries = {
  [MediaDeviceQueryKeys.anyHover]: AnyHover;
  [MediaDeviceQueryKeys.anyHoverNone]: AnyHoverNone;
  [MediaDeviceQueryKeys.anyPointer]: AnyPointer;
  [MediaDeviceQueryKeys.anyPointerNone]: AnyPointerNone;
  [MediaDeviceQueryKeys.displayBrowser]: DisplayModeBrowser;
  [MediaDeviceQueryKeys.displayFullScreen]: DisplayModeFullScreen;
  [MediaDeviceQueryKeys.displayMinUI]: DisplayModeMinUI;
  [MediaDeviceQueryKeys.displayStandalone]: DisplayModeStandalone;
  [MediaDeviceQueryKeys.hover]: Hover;
  [MediaDeviceQueryKeys.hoverNone]: HoverNone;
  [MediaDeviceQueryKeys.landscape]: OrientationLandscape;
  [MediaDeviceQueryKeys.pointer]: Pointer;
  [MediaDeviceQueryKeys.pointerNone]: PointerNone;
  [MediaDeviceQueryKeys.portrait]: OrientationPortrait;
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

export const mediaDeviceQueries: MediaDeviceQueries = {
  [MediaDeviceQueryKeys.anyHover]: 'any-hover: hover',
  [MediaDeviceQueryKeys.anyHoverNone]: 'any-hover: none',
  [MediaDeviceQueryKeys.hover]: 'hover: hover',
  [MediaDeviceQueryKeys.hoverNone]: 'hover: none',
  [MediaDeviceQueryKeys.anyPointer]: 'any-pointer: pointer',
  [MediaDeviceQueryKeys.anyPointerNone]: 'any-pointer: none',
  [MediaDeviceQueryKeys.pointer]: 'pointer: pointer',
  [MediaDeviceQueryKeys.pointerNone]: 'pointer: none',
  [MediaDeviceQueryKeys.landscape]: 'orientation: landscape',
  [MediaDeviceQueryKeys.portrait]: 'orientation: portrait',
  [MediaDeviceQueryKeys.displayFullScreen]: 'display-mode: fullscreen',
  [MediaDeviceQueryKeys.displayStandalone]: 'display-mode: standalone',
  [MediaDeviceQueryKeys.displayMinUI]: 'display-mode: minimal-ui',
  [MediaDeviceQueryKeys.displayBrowser]: 'display-mode: browser'
};
