import React from 'react';
import { theme } from '../theme';
// import { SVGwrapper } from '../styles';

export function UtilitiesIcon() {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <style type="text/css">
        {`
          .st0{
            fill:none;
            stroke: ${theme.colors.primary};
            stroke-width:1.8694;
            stroke-miterlimit:10;
          }

          .st1{
            fill:none;
            stroke: ${theme.colors.primary};
            stroke-width:1.8694;
            stroke-linecap:round;
            stroke-linejoin:round;
            stroke-miterlimit:10;
          }
	        .st2{
            fill: ${theme.colors.white};
            stroke: ${theme.colors.primary};
            stroke-width:1.804;
            stroke-linecap:round;
            stroke-linejoin:round;
            stroke-miterlimit:10;
          }

          .st3{
            fill:none;
            stroke: ${theme.colors.primary};
            stroke-width:1.804;
            stroke-linecap:round;
            stroke-linejoin:round;
            stroke-miterlimit:10;
          }
        `}
      </style>
      <g>
        <g>
          <path
            className="st0"
            d="M59.2,23.5c0-9.3-5.6-17.3-13.6-20.9v16l-9.2,9.3l-9.2-9.3v-16c-8,3.5-13.6,11.6-13.6,20.9
			c0,9,5.3,16.9,12.9,20.5v44.5c0,5.1,4.2,9.3,9.3,9.3H37c5.1,0,9.3-4.2,9.3-9.3V44C53.9,40.3,59.2,32.5,59.2,23.5z M36.4,92.8
			c-3.1,0-5.6-2.5-5.6-5.6c0-3.1,2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6C41.9,90.3,39.4,92.8,36.4,92.8z"
          />
          <line className="st1" x1="38.7" y1="57.1" x2="38.7" y2="78" />
        </g>
        <g>
          <path
            className="st2"
            d="M77,50.5l4.8-5.6v-3.9h-7.1V16.3h0l3-3l-4-10.7h-1.4H72h-1.4l-4,10.7l3,3h0v24.6h-7.1v3.9l4.8,5.6V54
			l-4.8,5.6v26.8c0,6.3,4.3,11.4,9.6,11.4s9.6-5.1,9.6-11.4V59.7L77,54h0L77,50.5L77,50.5z"
          />
          <line className="st3" x1="67.3" y1="40.9" x2="76.7" y2="40.9" />
          <line className="st3" x1="68.7" y1="60.1" x2="68.7" y2="89.4" />
          <line className="st3" x1="74.8" y1="60.1" x2="74.8" y2="89.4" />
        </g>
      </g>
    </svg>
  );
}
