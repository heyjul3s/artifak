import { MediaBoundaries } from './mediaBoundaries';
import { MediaDeviceQueries } from './mediaDevices';
import { MediaTypes } from './MediaTypes';
import { MediaAccessibilityQueries } from './mediaAccessibilty';

export type Media = MediaBoundaries &
  MediaDeviceQueries &
  MediaTypes &
  MediaAccessibilityQueries;
