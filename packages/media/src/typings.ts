import { MediaBoundaries } from './mediaBoundaries';
import { MediaInputQueries } from './mediaInput';
import { MediaTypes } from './mediaTypes';
import { MediaAccessibilityQueries } from './mediaAccessibilty';
import { MediaDisplayQueries } from './mediaDisplay';

export type Media = MediaBoundaries &
  MediaInputQueries &
  MediaTypes &
  MediaAccessibilityQueries &
  MediaDisplayQueries;
