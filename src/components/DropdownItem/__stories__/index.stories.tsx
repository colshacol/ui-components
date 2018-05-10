import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { DropdownItem } from "../";

storiesOf(DropdownItem.name, module)
  .add("default", () => <DropdownItem action={action("onClick")} value="Attribute" />)
  .add("with arrow", () => <DropdownItem action={action("onClick")} arrow value="Note" />)
  .add("active", () => <DropdownItem action={action("onClick")} value="Note" active />)
  .add("wrap", () => (
    <DropdownItem
      action={action("onClick")}
      value="One two three four five six seven eight nine ten. One two three four five six seven eight nine ten. One two three four five six seven eight nine ten. One two three four five six seven eight nine ten. One two three four five six seven eight nine ten. One two three four five six seven eight nine ten. One two three four five six seven eight nine ten. One two three four five six seven eight nine ten."
      wrap
    />
  ));
