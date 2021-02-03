import { mediaInputQueries } from './mediaInput';
import { mediaTypeQueries } from './mediaTypes';
import { mediaAccessibilityQueries } from './mediaAccessibilty';
import { mediaDisplayQueries } from './mediaDisplay';
import { MediaQueries } from './typings';

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
}: MediaQueries = {
  ...mediaInputQueries,
  ...mediaTypeQueries,
  ...mediaAccessibilityQueries,
  ...mediaDisplayQueries
};
