import * as React from "react";
import { AnimateAppear } from "../AnimateAppear";

const AnimateSlideDown: React.SFC<{ children?: React.ReactElement<{ style?: React.CSSProperties }> }> = ({ children }) => (
  <AnimateAppear y={-8} duration={200}>
    {children}
  </AnimateAppear>
);

export { AnimateSlideDown };
