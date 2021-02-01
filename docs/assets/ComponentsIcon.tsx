import React from 'react';
import { theme } from '../theme';
// import { SVGwrapper } from '../styles';

export function ComponentsIcon() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
    >
      <style type="text/css">
        {`.st0{
          fill: ${theme.colors.white};
          stroke: ${theme.colors.primary};
          stroke-width:2.3472;
          stroke-linecap:round;
          stroke-linejoin:round;
          stroke-miterlimit:10;
        }`}
      </style>
      <g>
        <polygon className="st0" points="50,98.2 9.1,74.2 9.1,23.7 50,47.7 	" />
        <polygon className="st0" points="50,98.2 90.9,74.2 90.9,23.7 50,47.7" />
        <polygon className="st0" points="9.1,23.7 50,1.8 90.9,23.7 50,47.7 	" />
        <polygon className="st0" points="50,83.1 25.9,69 25.9,39.2 50,53.4 	" />
        <polygon className="st0" points="50,83.1 74.1,69 74.1,39.2 50,53.4 	" />
        <polygon
          className="st0"
          points="25.9,39.2 50,26.3 74.1,39.2 50,53.4 	"
        />
      </g>
    </svg>
  );
}
