import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { WithStyle } from "../WithStyle";

type STATE = "unmounted" | "exited" | "entering" | "entered" | "exiting";

/**
 * Animate the display of an element entering the page. The animation will fade
 * in the element, and allows for optional slide/translate. The wrapped element
 * must support a `style` prop.
 *
 * @param x Initial horizontal offset (e.g. -10 will render as a slide to the
 * right).
 * @param y Initial vertical offset (e.g. -10 will render as a downward slide).
 * @param duration Animation duration in milliseconds.
 */
const AnimateAppear: React.SFC<{
  children?: React.ReactElement<{ style?: React.CSSProperties }>;
  x?: number;
  y?: number;
  duration?: number;
}> = ({ children, x = 0, y = 0, duration = 200 }) => (
  <CSSTransition appear={true} timeout={32} in={true} classNames={{}}>
    {(state: STATE) => (
      <WithStyle
        style={
          state === "entering"
            ? {
                transform: `translate3d(${x}px, ${y}px, 0)`,
                opacity: 0
              }
            : state === "entered"
              ? {
                  transition: `transform ${duration}ms cubic-bezier(.2, .45, 0, 1), opacity ${duration}ms cubic-bezier(.2, .45, 0, 1)`,
                  transform: "translate3d(0, 0, 0)",
                  opacity: 1
                }
              : undefined
        }
      >
        {children}
      </WithStyle>
    )}
  </CSSTransition>
);

export { AnimateAppear };
