import { debounceMicrotask } from "debounce-microtask";
import * as React from "react";
import { BORDER_RADIUS, Z_INDEX_HIGH } from "../../styles";
import { OnEsc } from "../OnEsc";

export interface Props {
  align: "left" | "right";
  onDismissAttempt?: () => void;
  onOutsideClick?: () => void;
  parentId: string;
}

export interface State {
  style: object;
}

export class Layer extends React.PureComponent<Props, State> {
  public readonly state: State = {
    style: {}
  };

  private internalClick = false;

  public componentDidMount() {
    document.addEventListener("click", this.handleGlobalClick);
    document.addEventListener("touchstart", this.handleGlobalClick);
    this.scheduleStyleStateUpdate();
  }

  public componentWillUnmount() {
    document.removeEventListener("click", this.handleGlobalClick);
    document.removeEventListener("touchstart", this.handleGlobalClick);
  }

  public render() {
    return (
      <span style={this.state.style} onClick={this.handleClick} onTouchStart={this.handleTouch}>
        {this.props.onDismissAttempt !== undefined ? <OnEsc action={this.props.onDismissAttempt} /> : null}
        {this.props.children}
      </span>
    );
  }

  /**
   * Schedule styles to be updated, debounced using a microtask defer evaluation
   * until after libraries like typestyle-react have a chance to inject styles
   * to the DOM.
   */
  private readonly scheduleStyleStateUpdate = debounceMicrotask(() => {
    this.setState({ style: this.getStyle() });
  });

  private getStyle() {
    const anchor = document.getElementById(this.props.parentId);

    if (anchor !== null) {
      const anchorRect = anchor.getBoundingClientRect();
      const scrollY = window.pageYOffset;
      const scrollX = window.pageXOffset;

      return {
        borderRadius: BORDER_RADIUS,
        margin: "8px 0",
        position: "absolute" as "absolute",
        zIndex: Z_INDEX_HIGH,
        top: scrollY + anchorRect.bottom,
        left: this.props.align === "left" ? scrollX + anchorRect.left : "auto",
        right: this.props.align === "right" ? `calc(100% - ${scrollX + anchorRect.right}px)` : "auto"
      };
    } else {
      return { display: "none" };
    }
  }

  private readonly handleGlobalClick = () => {
    if (!this.internalClick) {
      if (this.props.onDismissAttempt !== undefined) {
        this.props.onDismissAttempt();
      }
      if (this.props.onOutsideClick !== undefined) {
        this.props.onOutsideClick();
      }
    }
    this.internalClick = false;
  };

  private readonly handleClick: React.MouseEventHandler<HTMLSpanElement> = () => {
    this.internalClick = true;

    if (this.props.onDismissAttempt !== undefined) {
      this.props.onDismissAttempt();
    }
  };

  private readonly handleTouch: React.TouchEventHandler<HTMLSpanElement> = () => {
    this.internalClick = true;

    // No need to call props.onDismissAttempt() here, because
    // the order of events with a touch event listener is:
    //
    // 1. onTouchStart
    // 2. onClick
    //
    // The handleClick() function will be called after handleTouch()
    // and then take care of calling props.onDismissAttempt().
    //
    // However, we still need the touch listener to ensure we set
    // this.internalClick so handleGlobalClick doesn’t prematurely
    // close the layer before the touch is registered.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
  };
}
