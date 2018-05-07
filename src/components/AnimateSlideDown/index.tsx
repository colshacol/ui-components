import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { classes } from "typestyle";
import { style } from "typestyle-react";
import { WithClassName } from "../WithClassName";

const duration = 250;
type STATE = "unmounted" | "exited" | "entering" | "entered" | "exiting";

export const AnimateSlideDown = ({ children }: { children?: React.ReactElement<{ className?: string }> }) => (
  <CSSTransition appear={true} timeout={0} in={true} classNames={{}}>
    {(state: STATE) => (
      <WithClassName className={classes(AnimatedTransform, state === "entered" ? appearActiveClassName : null)}>
        {children}
      </WithClassName>
    )}
  </CSSTransition>
);

const AnimatedTransform = style({
  transition: `transform ${duration}ms cubic-bezier(.2, .45, 0, 1)`,
  transform: "translate3d(0, -8px, 0)"
});

const appearActiveClassName = style({
  transform: "translate3d(0, 0, 0)"
});
