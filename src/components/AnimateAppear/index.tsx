import * as React from "react";
import { Transition } from "react-transition-group";
import { WithStyle } from "../WithStyle";

type STATE = "unmounted" | "exited" | "entering" | "entered" | "exiting";

/**
 * Animate the display of an element entering the page. The animation will fade
 * in the element, and allows for optional slide/translate. The wrapped element
 * must support a `style` prop.
 *
 * @param x Initial horizontal offset in px (e.g. -10 will render as a slide to the
 * right).
 * @param y Initial vertical offset in px (e.g. -10 will render as a downward slide).
 * @param z Initial z offset in px
 * @param rx Initial X-axis rotation in deg
 * @param ry Initial Y-axis rotation in deg
 * @param rz Initial Z-axis rotation in deg
 * @param duration Animation duration in milliseconds.
 */
const AnimateAppear: React.SFC<{
  children?: React.ReactElement<{ style?: React.CSSProperties }>;
  x?: number;
  y?: number;
  z?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  duration?: number;
}> = ({ children, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, duration = 200 }) => (
  <Transition appear in timeout={0}>
    {(state: STATE) => (
      <WithStyle
        style={
          state === "entering"
            ? {
                transform: `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translate3d(${x}px, ${y}px, ${z}px)`,
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
  </Transition>
);

export { AnimateAppear };
