import React from 'react';
import { theme } from '../../../../../theme';

export function ExtensibleIcon() {
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <clipPath id="clip-path">
          <rect fill="none" x="1694.39" y="-45.12" width="355.81" height="354.97" />
        </clipPath>
      </defs>

      <g clipPath={"url(#clip-path)"}>
        <line fill="none" stroke={"#f15e22"} strokeWidth={"0.88px"} strokeMiterlimit={10} x1="593.88" y1="-66.58" x2="75.37" y2="331.31" />
        <line fill="none" stroke={"#f15e22"} strokeWidth={"0.88px"} strokeMiterlimit={10} x1="604.49" y1="-66.58" x2="85.98" y2="331.31" />
        <line fill="none" stroke={"#f15e22"} strokeWidth={"0.88px"} strokeMiterlimit={10} x1="615.09" y1="-66.58" x2="96.58" y2="331.31" />
      </g>
      <circle fill={theme.colors.primary} cx="12.68" cy="50" r="12.1" />
      <circle fill="none" strokeMiterlimit={10} stroke={theme.colors.primary} strokeWidth={"7.23px"} cx="51.68" cy="50" r="12.1" />
      <circle fill={theme.colors.primary} cx="87.32" cy="50" r="12.1" />
    </svg>
  );
}
