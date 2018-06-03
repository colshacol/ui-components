import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MeatballMenu } from "../";
import { Dropdown } from "../../Dropdown";
import { DropdownItem } from "../../DropdownItem";
import { DropdownSeparator } from "../../DropdownSeparator";
import { DropdownText } from "../../DropdownText";
import { InfoDropdown } from "../../InfoDropdown";

storiesOf(MeatballMenu.name, module)
  .add("Default", () => (
    <MeatballMenu align="left" onToggle={action("onToggle")}>
      <DropdownItem action={action("Save now")} value="Save now" />
      <DropdownItem action={action("Share")} value="Share" />
      <DropdownItem action={action("Attribute")} value="Attribute" />
      <DropdownItem action={action("View history")} value="View history" />
      <DropdownItem action={action("Delete")} value="Delete" />
    </MeatballMenu>
  ))
  .add("Advanced (single step)", () => (
    <MeatballMenu align="left" onToggle={action("onToggle")}>
      {({ dismiss }) => (
        <Dropdown onLeafClick={dismiss}>
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
    <MeatballMenu align="left" onToggle={action("onToggle")}>
      {({ dismiss, push, pop }) => (
        <Dropdown onLeafClick={dismiss}>
          <DropdownItem
            action={() =>
              push(
                <Dropdown onLeafClick={dismiss}>
                  <DropdownItem action={pop} value="Back…" branch />
                  <DropdownItem value="Close" />
                </Dropdown>
              )
            }
            value="Nested menu…"
            branch
          />
          <DropdownItem
            action={() => push(<InfoDropdown info={[{ label: "Date", value: new Date().toISOString() }]} />)}
            value="Properties…"
            branch
          />
          <DropdownItem action={action("close")} value="Close" />
        </Dropdown>
      )}
    </MeatballMenu>
  ))
  .add("JSDoc example", () => (
    <MeatballMenu align="left" onToggle={action("onToggle")}>
      {({ dismiss, push }) => (
        <Dropdown onLeafClick={dismiss}>
          <DropdownItem
            value="Profile…"
            action={() =>
              push(
                <Dropdown onLeafClick={dismiss}>
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
    </MeatballMenu>
  ));
