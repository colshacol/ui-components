import * as React from "react";
import { Layer } from "../Layer";
import { Portal } from "../Portal";
import { Uid } from "../Uid";

export interface Props {
  align: "left" | "right";
  children: ((
    api: {
      dismiss: () => void;
      push: (child: React.ReactNode) => void;
      pop: () => void;
    }
  ) => React.ReactNode);
  onToggle?: (active: boolean) => void;
  trigger: (
    api: {
      /**
       * An HTML element ID that must be set on the trigger to indicate which
       * element the menu items should align to.
       */
      id: string;
      /**
       * An `onClick` handler that must be called when the trigger is clicked.
       */
      onClick: () => void;
      /**
       * When `true` indicates that the menu is open / active.
       */
      active: boolean;
    }
  ) => React.ReactNode;
}

export interface ClosedState {
  type: "closed";
}

export interface OpenState {
  type: "open";
  pushed: ReadonlyArray<React.ReactNode>;
}

export type State = ClosedState | OpenState;

/**
 * Renders a button (e.g. [•••] button) that opens a menu to display a list of
 * buried items.
 *
 * In some cases more advanced behaviour is desired (e.g. stack/nested dropdown
 * menus, where one item opens another dropdown). For these scenarios, the
 * function child of `Menu` allows full control over what's rendered:
 *
 *     <Menu trigger={props => <Button {...props}>Menu</Button>} align="left">
 *       {({ dismiss }) => (
 *         <Dropdown onLeafClick={dismiss}>
 *           <DropdownItem value="Profile" action={action("click Profile")} />
 *           <DropdownItem value="Team" action={action("click Team")} />
 *           <DropdownSeparator />
 *           <DropdownItem value="Help" action={action("click Help")}/>
 *         </Dropdown>
 *       )}
 *     </Menu>
 *
 * Menu supports multi-level menus where one menu item triggers another to open.
 *
 *     <Menu trigger={props => <Button {...props}>Menu</Button>}  align="left">
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
 *     </Menu>
 *
 * **Tip:** `DropdownItem` supports a `branch` to exclude the item from the
 * `onLeafClick` callback.
 *
 * It's intentional that the consumer is required to render the `<Dropdown>`
 * rather than it being implicitly rendered by `Menu`. This allows for `Menu` to
 * support menus that aren't based on dropdowns.
 */
export class Menu extends React.Component<Props, State> {
  public readonly state: State = { type: "closed" };

  // HACK: a flag to allow us to conditionally ignore the "dismiss attempt" from
  // `<Layer>` when the user clicks the meatball while in a nested menu.
  private handlingMeatballClick = false;

  public render() {
    const { align, children } = this.props;
    const { state } = this;

    return (
      <Uid>
        {({ id }) => (
          <>
            {this.props.trigger({ id, onClick: this.handleTriggerClick, active: state.type === "open" })}
            {state.type === "open" ? (
              <Portal>
                <Layer
                  align={align}
                  dismissOnInsideClick={false}
                  onDismissAttempt={this.handleLayerDismissAttempt}
                  parentId={id}
                >
                  {state.pushed.length === 0 ? (
                    children(this.childrenApi)
                  ) : (
                    // Use a keyed fragment to ensure each depth of menu is
                    // re-rendered. This ensures appear/leave animations correctly
                    // trigger.
                    <React.Fragment key={state.pushed.length}>{state.pushed[state.pushed.length - 1]}</React.Fragment>
                  )}
                </Layer>
              </Portal>
            ) : null}
          </>
        )}
      </Uid>
    );
  }

  private readonly handleTriggerClick = () => {
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
    const oldState = this.state;
    this.setState(nextState);
    if (nextState.type !== oldState.type && this.props.onToggle !== undefined) {
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
