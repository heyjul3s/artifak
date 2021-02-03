import React from 'react';
import { theme } from '../theme';

export function CloseIcon() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
    >
      <g>
        <g>
          <path
            d="M87.8,97.1c-2.5,0-5-0.9-6.9-2.8L5.4,18.8C1.7,15,1.7,8.9,5.4,5.1c3.8-3.8,9.9-3.8,13.7,0l75.5,75.5
      c3.8,3.8,3.8,9.9,0,13.7C92.7,96.2,90.3,97.1,87.8,97.1z"
            style={{
              fill: 'transparent',
              stroke: `${theme.colors.white}`,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '3.2px'
            }}
          />
        </g>
        <g>
          <path
            d="M12.3,97.1c-2.5,0-5-0.9-6.9-2.8c-3.8-3.8-3.8-9.9,0-13.7L80.9,5.1c3.8-3.8,9.9-3.8,13.7,0
      c3.8,3.8,3.8,9.9,0,13.7L19.2,94.3C17.3,96.2,14.8,97.1,12.3,97.1z"
            style={{
              fill: 'transparent',
              stroke: `${theme.colors.white}`,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '3.2px'
            }}
          />
        </g>
      </g>
    </svg>
  );
}
