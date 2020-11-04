import { mediaDeviceQueries } from './mediaDevices';
import { mediaTypeQueries } from './mediaTypes';

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
  portrait
} = { ...mediaDeviceQueries, ...mediaTypeQueries };
