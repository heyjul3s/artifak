import { mediaDeviceQueries } from './mediaDevices';
import { mediaTypeQueries } from './mediaTypes';
import { mediaAccessibilityQueries } from './mediaAccessibilty';

export const {
  all,
  screen,
  onlyScreen,
  speech,
  onlySpeech,
  print,
  onlyPrint,
  anyHover,
  anyHoverNone,
  hover,
  hoverNone,
  anyPointer,
  anyPointerNone,
  pointer,
  pointerNone,
  displayBrowser,
  displayFullScreen,
  displayMinUI,
  displayStandalone,
  landscape,
  portrait,
  darkColorScheme,
  lightColorScheme,
  reducedMotion,
  reducedMotionAny
} = {
  ...mediaDeviceQueries,
  ...mediaTypeQueries,
  ...mediaAccessibilityQueries
};
