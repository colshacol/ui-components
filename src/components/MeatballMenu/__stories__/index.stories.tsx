import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MeatballMenu } from "../";
import { Dropdown } from "../../Dropdown";
import { DropdownItem } from "../../DropdownItem";
import { DropdownSeparator } from "../../DropdownSeparator";
import { DropdownText } from "../../DropdownText";
import { Stack } from "../../Stack";

storiesOf(MeatballMenu.name, module)
  .add("Default", () => (
    <MeatballMenu align="left">
      <DropdownItem action={action("Save now")} value="Save now" />
      <DropdownItem action={action("Share")} value="Share" />
      <DropdownItem action={action("Attribute")} value="Attribute" />
      <DropdownItem action={action("View history")} value="View history" />
      <DropdownItem action={action("Delete")} value="Delete" />
    </MeatballMenu>
  ))
  .add("Advanced (single step)", () => (
    <MeatballMenu align="left">
      {({ toggle }) => (
        <Dropdown onLeafClick={toggle}>
          <DropdownItem action={action("Save now")} value="Save now" />
          <DropdownItem action={action("Share")} value="Share" />
          <DropdownItem action={action("Attribute")} value="Attribute" />
          <DropdownItem action={action("View history")} value="View history" />
          <DropdownItem action={action("Delete")} value="Delete" />
        </Dropdown>
      )}
    </MeatballMenu>
  ))
  .add("Advanced (multiple steps)", () => (
    <MeatballMenu align="left">
      {({ toggle }) => (
        <Stack>
          {({ push, pop }) => (
            <Dropdown key="root" onLeafClick={toggle}>
              <DropdownItem
                action={() =>
                  push(
                    // Explicitly declaring keys ensures this dropdown is
                    // rendered fresh, which is significant as it causes the
                    // appear animation to display.
                    <Dropdown key="details" onLeafClick={toggle}>
                      <DropdownItem action={pop} value="Back…" branch />
                      <DropdownItem value="Close" />
                    </Dropdown>
                  )
                }
                value="Nested menu…"
                branch
              />
              <DropdownItem action={action("close")} value="Close" />
            </Dropdown>
          )}
        </Stack>
      )}
    </MeatballMenu>
  ))
  .add("JSDoc example", () => (
    <MeatballMenu align="left">
      {({ toggle }) => (
        <Stack>
          {({ push }) => (
            <Dropdown onLeafClick={toggle} key="root">
              <DropdownItem
                value="Profile…"
                action={() =>
                  push(
                    <Dropdown onLeafClick={toggle} key="profile">
                      <DropdownText lines={["Name: <user name>", "Email: <user email>"]} />
                    </Dropdown>
                  )
                }
                branch
              />
              <DropdownItem value="Team" action={action("click Team")} />
              <DropdownSeparator />
              <DropdownItem value="Help" action={action("click Help")} />
            </Dropdown>
          )}
        </Stack>
      )}
    </MeatballMenu>
  ));
