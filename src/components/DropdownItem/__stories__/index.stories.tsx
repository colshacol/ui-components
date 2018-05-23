import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { DropdownItem } from "../";

storiesOf(DropdownItem.name, module)
  .add("Default", () => <DropdownItem action={action("onClick")} value="Attribute" />)
  .add("Arrow", () => <DropdownItem action={action("onClick")} arrow value="Note" />)
  .add("Active", () => <DropdownItem action={action("onClick")} value="Note" active />)
  .add("Wrapping", () => (
    <DropdownItem
      action={action("onClick")}
      value="Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps."
      wrap
    />
  ));
