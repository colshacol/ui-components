// tslint:disable
//
//  This file was generated automatically by @heydovetail/svg-to-react and
//  should not be manually edited.
//
import { createSvg, Props } from "@heydovetail/svg-to-react";
import * as React from "react";

export default createSvg((width = 32, height = 32, color): React.ReactElement<Props> => (
  <svg width={width} height={height} viewBox="0 0 38 38" stroke={color}>
    <g transform="translate(1 1)" strokeWidth={2} fill="none" fillRule="evenodd">
      <circle strokeOpacity={0.1} cx={18} cy={18} r={18} />
      <path d="M36 18c0-9.94-8.06-18-18-18">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
));
