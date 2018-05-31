import * as React from "react";
import { styled } from "typestyle-react";
import { AnimateSlideDown } from "../AnimateSlideDown";
import { Fragment } from "../Fragment";
import { Layer } from "../Layer";
import { Portal } from "../Portal";

export type AlignmentOptions = "left" | "right";

export interface Props {
  align?: AlignmentOptions;
  children: React.ReactNode;
  delay?: number;
  renderComponent?: () => React.ReactNode;
  renderAltComponent?: () => React.ReactNode;
}

export interface State {
  alt: boolean;
  open: boolean;
}

let counter: number = 0;

export class ShowOnHover extends React.Component<Props, State> {
  public state: Readonly<State> = { alt: false, open: false };
  private readonly id = `ShowOnHover_${counter++}`;
  private timer: number | null | undefined;

  private readonly onMouseEnter: React.MouseEventHandler<HTMLSpanElement> = e => {
    // React synthetic events are re-used, so we must pull off the altKey value
    // here rather than inside the async `setTimeout` callback.
    const altKey = e.altKey;

    this.timer = window.setTimeout(() => {
      this.setState({
        alt: altKey,
        open: true
      });
    }, this.props.delay !== undefined ? this.props.delay : 250);
  };

  private readonly onMouseLeave = () => {
    this.setState({ alt: false, open: false });
    this.clearTimerIfSet();
  };

  private clearTimerIfSet() {
    if (this.timer != null) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public componentWillUnmount() {
    this.clearTimerIfSet();
  }

  public render() {
    const { align = "left", children, renderAltComponent, renderComponent } = this.props;
    return (
      <Fragment>
        <span
          id={this.id}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          style={{ display: "flex", maxWidth: "100%" }}
        >
          {children}
        </span>

        {this.state.open ? (
          <Portal>
            <Layer align={align} parentId={this.id}>
              <AnimateSlideDown>
                <AnimatableContainer>
                  {this.state.alt && renderAltComponent !== undefined
                    ? renderAltComponent()
                    : renderComponent !== undefined
                      ? renderComponent()
                      : null}
                </AnimatableContainer>
              </AnimateSlideDown>
            </Layer>
          </Portal>
        ) : null}
      </Fragment>
    );
  }
}

const AnimatableContainer = styled("div", { display: "inline-flex" });
