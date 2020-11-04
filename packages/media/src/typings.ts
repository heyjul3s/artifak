import { MediaBoundaries } from './mediaBoundaries';
import { MediaDeviceQueries } from './mediaDevices';
import { MediaTypes } from './MediaTypes';

export type Media = MediaBoundaries & MediaDeviceQueries & MediaTypes;
