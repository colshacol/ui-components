// tslint:disable
//
//  This file was generated automatically by @heydovetail/svg-to-react and
//  should not be manually edited.
//
import { createSvg, Props } from "@heydovetail/svg-to-react";
import * as React from "react";

export default createSvg((width = 24, height = 24, color): React.ReactElement<Props> => (
  <svg width={width} height={height} viewBox="0 0 24 24" stroke={color}>
    <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} transform="translate(2 2)">
      <circle strokeOpacity={0.1} cx={10} cy={10} r={10} />
      <path d="M20 10c0-5.523-4.477-10-10-10">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 10 10"
          to="360 10 10"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
));
