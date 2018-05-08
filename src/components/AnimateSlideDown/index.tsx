import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { classes } from "typestyle";
import { style } from "typestyle-react";
import { WithClassName } from "../WithClassName";

const duration = 200;
type STATE = "unmounted" | "exited" | "entering" | "entered" | "exiting";

export const AnimateSlideDown = ({ children }: { children?: React.ReactElement<{ className?: string }> }) => (
  <CSSTransition appear={true} timeout={32} in={true} classNames={{}}>
    {(state: STATE) => {
      console.log(state);
      return (
        <WithClassName
          className={classes(state === "entering" ? enteringClass : null, state === "entered" ? enteredClass : null)}
        >
          {children}
        </WithClassName>
      );
    }}
  </CSSTransition>
);

const enteringClass = style({
  transform: "translate3d(0, -8px, 0)",
  opacity: 0
});

const enteredClass = style({
  transition: `transform ${duration}ms cubic-bezier(0.1, 0.45, 0.25, 1), opacity ${duration}ms cubic-bezier(0.1, 0.45, 0.25, 1)`,
  transform: "translate3d(0, 0, 0)",
  opacity: 1
});
