export enum MediaDeviceQueryKeys {
  'landscape' = 'landscape',
  'portrait' = 'portrait',
  'fullScreen' = 'displayFullScreen',
  'standalone' = 'displayStandalone',
  'minUI' = 'displayMinUI',
  'browser' = 'displayBrowser'
}

export type MediaDisplayQueries = {
  [MediaDeviceQueryKeys.browser]: DisplayModeBrowser;
  [MediaDeviceQueryKeys.fullScreen]: DisplayModeFullScreen;
  [MediaDeviceQueryKeys.minUI]: DisplayModeMinUI;
  [MediaDeviceQueryKeys.standalone]: DisplayModeStandalone;
  [MediaDeviceQueryKeys.landscape]: OrientationLandscape;
  [MediaDeviceQueryKeys.portrait]: OrientationPortrait;
};

export type DisplayModeBrowser = 'display-mode: browser';
export type DisplayModeFullScreen = 'display-mode: fullscreen';
export type DisplayModeMinUI = 'display-mode: minimal-ui';
export type DisplayModeStandalone = 'display-mode: standalone';
export type OrientationLandscape = 'orientation: landscape';
export type OrientationPortrait = 'orientation: portrait';

export const mediaDisplayQueries: MediaDisplayQueries = {
  [MediaDeviceQueryKeys.landscape]: 'orientation: landscape',
  [MediaDeviceQueryKeys.portrait]: 'orientation: portrait',
  [MediaDeviceQueryKeys.fullScreen]: 'display-mode: fullscreen',
  [MediaDeviceQueryKeys.standalone]: 'display-mode: standalone',
  [MediaDeviceQueryKeys.minUI]: 'display-mode: minimal-ui',
  [MediaDeviceQueryKeys.browser]: 'display-mode: browser'
};
