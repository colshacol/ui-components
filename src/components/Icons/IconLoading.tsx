// tslint:disable
//
//  This file was generated automatically by @heydovetail/svg-to-react and
//  should not be manually edited.
//
import { createSvg, Props } from "@heydovetail/svg-to-react";
import * as React from "react";

export default createSvg((width = 24, height = 24, color): React.ReactElement<Props> => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <g
      transform="translate(2 10)"
      stroke={color}
      strokeWidth={2}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={2} cy={2} r={2}>
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1s" />
      </circle>
      <circle cx={10} cy={2} r={2}>
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2s" />
      </circle>
      <circle cx={18} cy={2} r={2}>
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3s" />
      </circle>
    </g>
  </svg>
));
