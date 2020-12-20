import React from 'react';

export function getDevicePosition(
  e: React.MouseEvent | React.TouchEvent
): { x: number; y: number } {
  return {
    x: getDevicePositionX(e),
    y: getDevicePositionY(e)
  };
}

export const getDevicePositionX = getDevicePositionByOrientation.bind(
  this,
  'X'
);

export const getDevicePositionY = getDevicePositionByOrientation.bind(
  this,
  'Y'
);

export function getDevicePositionByOrientation(
  orientation: 'X' | 'Y',
  e: React.MouseEvent | React.TouchEvent
): number {
  return (e as React.TouchEvent).changedTouches
    ? (e as React.TouchEvent).changedTouches[0][`client${orientation}`]
    : (e as React.MouseEvent)[`page${orientation}`];
}
