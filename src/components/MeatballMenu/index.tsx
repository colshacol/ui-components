import * as React from "react";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import IconMoreHorizontal from "../Icons/IconMoreHorizontal";
import { Layer } from "../Layer";
import { Portal } from "../Portal";
import { SubtleButton } from "../SubtleButton";

export interface Props {
  align: "left" | "right";
  id?: string;
  /**
   * Height of the trigger button (in pixels).
   */
  height?: number;
  onToggle?: (active: boolean) => void;
  /**
   * Height of the subtle button.
   * @deprecated use `height`
   */
  subtleButtonHeight?: number;
  /**
   * If `true`, render a subtle button instead of a regular button.
   */
  subtle?: boolean;
  children:
    | React.ReactNode
    | ((
        api: { dismiss: () => void; toggle: () => void; push: (child: React.ReactNode) => void; pop: () => void }
      ) => React.ReactNode);
}

export interface ClosedState {
  type: "closed";
}

export interface OpenState {
  type: "open";
  pushed: ReadonlyArray<React.ReactNode>;
}

export type State = ClosedState | OpenState;

let counter: number = 0;

/**
 * Renders a "meatball button" (i.e. [•••] button) that opens a dropdown to
 * display a list of buried items.
 *
 * MeatballMenu can be used in two modes: "basic", or "advanced". In the basic
 * mode, the children are nested into an implicitly rendered `<Dropdown>`. This
 * is perfect for simple scenarios.
 *
 *     <MeatballMenu align="left">
 *       <DropdownItem value="Profile" action={action("click Profile")} />
 *       <DropdownItem value="Team" action={action("click Team")} />
 *       <DropdownSeparator />
 *       <DropdownItem value="Help" action={action("click Help")}/>
 *     </MeatballMenu>
 *
 * In some cases more advanced behaviour is desired (e.g. stack/nested dropdown
 * menus, where one item opens another dropdown). For these scenarios, pass a
 * function child to MeatballMenu, and take full control over what's rendered:
 *
 *     <MeatballMenu align="left">
 *       {({ dismiss }) => (
 *         <Dropdown onLeafClick={dismiss}>
 *           <DropdownItem value="Profile" action={action("click Profile")} />
 *           <DropdownItem value="Team" action={action("click Team")} />
 *           <DropdownSeparator />
 *           <DropdownItem value="Help" action={action("click Help")}/>
 *         </Dropdown>
 *       )}
 *     </MeatballMenu>
 *
 * By combining `MeatballMenu` with `Stack`, it's possible to implement a
 * multi-level menu where one dropdown item triggers another to open.
 *
 *     <MeatballMenu align="left">
 *       {({ dismiss, push }) => (
 *         <Dropdown onLeafClick={dismiss}>
 *           <DropdownItem
 *             value="Profile…"
 *             action={() =>
 *               push(
 *                 <Dropdown onLeafClick={dismiss}>
 *                   <DropdownText lines={["Name: <user name>", "Email: <user email>"]} />
 *                 </Dropdown>
 *               )
 *             }
 *             branch
 *           />
 *           <DropdownItem value="Team" action={action("click Team")} />
 *           <DropdownSeparator />
 *           <DropdownItem value="Help" action={action("click Help")} />
 *         </Dropdown>
 *       )}
 *     </MeatballMenu>
 *
 * **Note:** `DropdownItem` supports a `branch` to exclude the item from the
 * `onLeafClick` callback.
 *
 * It's intentional that in the advanced mode, the consumer is required to
 * render the `<Dropdown>` rather than it being implicitly rendered by
 * `MeatballMenu`. This allows for non-dropdown panels to be shown.
 */
export class MeatballMenu extends React.PureComponent<Props, State> {
  public readonly state: State = { type: "closed" };
  private readonly id = `MeatballMenu_${counter++}`;

  // HACK: a flag to allow us to conditionally ignore the "dismiss attempt" from
  // `<Layer>` when the user clicks the meatball while in a nested menu.
  private handlingMeatballClick = false;

  public render() {
    const { align, children, height, id = this.id, subtleButtonHeight, subtle = false } = this.props;
    const { state } = this;

    return (
      <>
        {subtle ? (
          <SubtleButton height={height !== undefined ? height : subtleButtonHeight} id={id} onClick={this.handleMeatballClick}>
            <IconMoreHorizontal />
          </SubtleButton>
        ) : (
          <Button height={height} id={id} onClick={this.handleMeatballClick}>
            <IconMoreHorizontal />
          </Button>
        )}
        {state.type === "open" ? (
          <Portal>
            <Layer align={align} dismissOnInsideClick={false} onDismissAttempt={this.handleLayerDismissAttempt} parentId={id}>
              {typeof children === "function" ? (
                state.pushed.length === 0 ? (
                  children(this.childrenApi)
                ) : (
                  // Use a keyed fragment to ensure each depth of menu is
                  // re-rendered. This ensures appear/leave animations correctly
                  // trigger.
                  <React.Fragment key={state.pushed.length}>{state.pushed[state.pushed.length - 1]}</React.Fragment>
                )
              ) : (
                <Dropdown onLeafClick={this.dismiss}>{children}</Dropdown>
              )}
            </Layer>
          </Portal>
        ) : null}
      </>
    );
  }

  private readonly handleMeatballClick = () => {
    this.handlingMeatballClick = true;
    requestAnimationFrame(() => {
      this.handlingMeatballClick = false;
    });
    this.toggle();
  };

  private readonly handleLayerDismissAttempt = () => {
    if (!this.handlingMeatballClick) {
      this.dismiss();
    }
  };

  /**
   * Toggle between states, or to a specific state, calling `onToggle` when
   * necessary. When `nextOpen` is not passed, it's determined based on the
   * current state.
   *
   * An important (but subtle) UX detail of MeatballMenu is that when a nested
   * menu is displayed, clicking the meatball **does not** dismiss the menu, but
   * instead stays open and navigates back to the first menu.
   */
  private readonly toggle = (nextOpen = this.state.type === "closed" || this.state.pushed.length > 0) => {
    const nextState: State = nextOpen ? { type: "open", pushed: [] } : { type: "closed" };
    this.setState(nextState);
    if (nextState.type !== this.state.type && this.props.onToggle !== undefined) {
      this.props.onToggle(nextState.type === "open");
    }
  };

  private readonly dismiss = () => {
    this.toggle(false);
  };

  private readonly childrenApi = {
    dismiss: this.dismiss,
    // Alias of `dismiss` (legacy API)
    toggle: this.dismiss,
    push: (children: React.ReactNode) => {
      this.setState(
        prevState => (prevState.type === "open" ? { type: "open", pushed: [...prevState.pushed, children] } : prevState)
      );
    },
    pop: () => {
      this.setState(
        prevState => (prevState.type === "open" ? { type: "open", pushed: prevState.pushed.slice(0, -1) } : prevState)
      );
    }
  };
}
