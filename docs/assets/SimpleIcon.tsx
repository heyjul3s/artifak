import React from 'react';
import { theme } from '../theme';

export function SimpleIcon() {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <defs>
        <style>
          {`
          .cls-1,
          .cls-4{
            fill:none;
          }

          .cls-2{fill:#fff;}

          .cls-3{
            clip-path:url(#clip-path);
          }

          .cls-4{
            stroke: ${theme.colors.primary};
            stroke-miterlimit:10;
            stroke-width:0.88px;
          }`}
        </style>

        <clipPath id="clip-path">
          <rect
            className="cls-1"
            x="1694.39"
            y="-167.35"
            width="355.81"
            height="354.97"
          />
        </clipPath>
      </defs>

      <path
        className="cls-2"
        d="M16,66.8,2.48,52.1,16,37.39H30.3L16.73,52.1,30.3,66.8Z"
      />
      <path className="cls-2" d="M64.84,12.17,47,87.83H36L53.86,12.17Z" />
      <path
        className="cls-2"
        d="M69.7,37.39H84L97.52,52.1,84,66.8H69.7L83.28,52.1Z"
      />
      <g className="cls-3">
        <line
          className="cls-4"
          x1="593.88"
          y1="-188.81"
          x2="75.37"
          y2="209.08"
        />
        <line
          className="cls-4"
          x1="604.49"
          y1="-188.81"
          x2="85.98"
          y2="209.08"
        />
        <line
          className="cls-4"
          x1="615.09"
          y1="-188.81"
          x2="96.58"
          y2="209.08"
        />
      </g>
    </svg>
  );
}
