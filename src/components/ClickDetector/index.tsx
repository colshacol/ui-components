import * as React from "react";

export interface ChildrenApi {
  onClick: React.MouseEventHandler<HTMLElement>;
  onTouchStart: React.TouchEventHandler<HTMLElement>;
}

export interface Props {
  onClick?: () => void;
  onOutsideClick?: () => void;
  children: (api: ChildrenApi) => React.ReactNode;
}

/**
 * Creates a detector boundary that allows detection of clicks inside (or
 * outside!) of the React tree beneath (including through portals).
 *
 * This is most useful for detecting "outside" clicks, for dropdowns, modals, or
 * other panels where the user should be able to "dismiss" it by clicking
 * outside it.
 */
export class ClickDetector extends React.PureComponent<Props> {
  // Track the number of internal click events that have stacked up. In an
  // earlier version of this component this property was a simple boolean,
  // because it was assumed that the internal→global ordering of event handlers
  // executing would always hold, but this is actually not the case.
  //
  // When rendering a component, using its `ref` callback, it's possible to
  // synchronously induce a `click` event. This can change the ordering to be
  // internal→internal→global→global, and so a counter is actually needed.
  //
  // This might seem like an esoteric edge case, but it was encountered when
  // rendering the `<FilePicker>` component as a `<Menu>` stack item. When
  // `<FilePicker>` mounts it synchronously calls `inputElement.click()` (via
  // `ref`) to open the browser's native file picker.
  private internalClickStackSize = 0;

  public componentDidMount() {
    document.addEventListener("click", this.handleGlobalClick);
    document.addEventListener("touchstart", this.handleGlobalClick);
  }

  public componentWillUnmount() {
    document.removeEventListener("click", this.handleGlobalClick);
    document.removeEventListener("touchstart", this.handleGlobalClick);
  }

  public render() {
    return this.props.children(this.childrenApi);
  }

  private readonly handleGlobalClick = () => {
    if (this.internalClickStackSize === 0) {
      if (this.props.onOutsideClick !== undefined) {
        this.props.onOutsideClick();
      }
    } else {
      this.internalClickStackSize -= 1;
    }
  };

  private readonly handleClick: React.MouseEventHandler<HTMLSpanElement> = () => {
    this.internalClickStackSize += 1;

    if (this.props.onClick !== undefined) {
      this.props.onClick();
    }
  };

  private readonly handleTouch: React.TouchEventHandler<HTMLSpanElement> = () => {
    this.internalClickStackSize += 1;

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

  /**
   * Cached for re-use when rendering.
   */
  private readonly childrenApi: ChildrenApi = {
    onClick: this.handleClick,
    onTouchStart: this.handleTouch
  };
}
