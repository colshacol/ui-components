import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { MeatballMenu } from "../";
import { DropdownItem } from "../../DropdownItem";

storiesOf(MeatballMenu.name, module).add("Default", () => (
  <MeatballMenu align="left">
    <DropdownItem action={action("onClick")} value="Save now" />
    <DropdownItem action={action("onClick")} value="Share" />
    <DropdownItem action={action("onClick")} value="Attribute" />
    <DropdownItem action={action("onClick")} value="View history" />
    <DropdownItem action={action("onClick")} value="Delete" />
  </MeatballMenu>
));
