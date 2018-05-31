import * as React from "react";
import IconMoreHorizontal from "../../icons/IconMoreHorizontal";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import { FlipFlop } from "../FlipFlop";
import { Layer } from "../Layer";
import { Portal } from "../Portal";
import { SubtleButton } from "../SubtleButton";

export interface Props {
  align: "left" | "right";
  id?: string;
  onToggle?: (active: boolean) => void;
  subtleButtonHeight?: number;
  subtle?: boolean;
  children: React.ReactNode | ((api: { toggle: () => void }) => React.ReactNode);
}

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
 *       {({ toggle }) => (
 *         <Dropdown onLeafClick={toggle}>
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
 *      {({ toggle }) => (
 *        <Stack>
 *          {({ push }) => (
 *            <Dropdown onLeafClick={toggle} key="root">
 *              <DropdownItem
 *                value="Profile…"
 *                action={() =>
 *                  push(
 *                    <Dropdown onLeafClick={toggle} key="profile">
 *                      <DropdownText lines={["Name: <user name>", "Email: <user email>"]} />
 *                    </Dropdown>
 *                  )
 *                }
 *                branch
 *              />
 *              <DropdownItem value="Team" action={action("click Team")} />
 *              <DropdownSeparator />
 *              <DropdownItem value="Help" action={action("click Help")} />
 *            </Dropdown>
 *          )}
 *        </Stack>
 *      )}
 *    </MeatballMenu>
 *
 * **Note:** `DropdownItem` supports a `branch` to exclude the item from the
 * `onLeafClick` callback.
 */
export class MeatballMenu extends React.PureComponent<Props> {
  private readonly id = `MeatballMenu_${counter++}`;

  public render() {
    const { align, children, id = this.id, onToggle, subtleButtonHeight, subtle = false } = this.props;
    return (
      <FlipFlop>
        {({ toggle, active }) => (
          <>
            {subtle === true ? (
              <SubtleButton
                height={subtleButtonHeight}
                id={id}
                onClick={() => {
                  toggle();
                  if (onToggle !== undefined) {
                    onToggle(!active);
                  }
                }}
              >
                <IconMoreHorizontal />
              </SubtleButton>
            ) : (
              <Button
                id={id}
                onClick={() => {
                  toggle();
                  if (onToggle !== undefined) {
                    onToggle(!active);
                  }
                }}
              >
                <IconMoreHorizontal />
              </Button>
            )}
            {active ? (
              <Portal>
                <Layer
                  align={align}
                  dismissOnInsideClick={false}
                  onDismissAttempt={() => {
                    toggle();
                    if (onToggle !== undefined) {
                      onToggle(!active);
                    }
                  }}
                  parentId={id}
                >
                  {typeof children === "function" ? children({ toggle }) : <Dropdown onLeafClick={toggle}>{children}</Dropdown>}
                </Layer>
              </Portal>
            ) : null}
          </>
        )}
      </FlipFlop>
    );
  }
}
