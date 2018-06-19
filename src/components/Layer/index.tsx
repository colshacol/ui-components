import * as React from "react";
import { BORDER_RADIUS, Z_INDEX_HIGH } from "../../styles";
import { ClickDetector } from "../ClickDetector";
import { OnEsc } from "../OnEsc";

export interface Props {
  align: "left" | "right";
  /**
   * When `true` (default), `<Layer>` treats inside clicks as attempts to
   * dismiss (will call `onDismissAttempt`). This is the default behaviour as
   * it's been found to be generally desirable.
   */
  dismissOnInsideClick?: boolean;
  onDismissAttempt?: () => void;
  onOutsideClick?: () => void;
  onClick?: () => void;
  parentId: string;
}

export interface State {
  style?: React.CSSProperties;
}

export class Layer extends React.PureComponent<Props, State> {
  public readonly state: State = {};
  private rafHandle: number | undefined;

  public componentDidMount() {
    // Schedule styles to be updated, scheduled using an animation frame to
    // ensure the DOM and styles have settled.
    this.rafHandle = requestAnimationFrame(() => {
      this.setState({ style: this.getStyle() });
    });
  }

  public componentWillUnmount() {
    if (this.rafHandle !== undefined) {
      cancelAnimationFrame(this.rafHandle);
      this.rafHandle = undefined;
    }
  }

  public render() {
    const { style } = this.state;
    return style === undefined ? null : (
      <ClickDetector onClick={this.handleClick} onOutsideClick={this.handleOutsideClick}>
        {props => (
          <span style={style} {...props}>
            {this.props.onDismissAttempt !== undefined ? <OnEsc action={this.props.onDismissAttempt} /> : null}
            {this.props.children}
          </span>
        )}
      </ClickDetector>
    );
  }

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
    }

    return;
  }

  private readonly handleOutsideClick = () => {
    if (this.props.onDismissAttempt !== undefined) {
      this.props.onDismissAttempt();
    }
    if (this.props.onOutsideClick !== undefined) {
      this.props.onOutsideClick();
    }
  };

  private readonly handleClick = () => {
    if (this.props.onClick !== undefined) {
      this.props.onClick();
    }
    if (this.props.dismissOnInsideClick !== false && this.props.onDismissAttempt !== undefined) {
      this.props.onDismissAttempt();
    }
  };
}
