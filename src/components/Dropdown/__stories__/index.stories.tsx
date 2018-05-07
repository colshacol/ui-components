import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Dropdown } from "../";
import { DropdownItem, DropdownSeparator, IconNote, IconStar, IconTag } from "../../..";

storiesOf(Dropdown.name, module)
  .add("with items", () => (
    <div style={{ display: "flex" }}>
      <Dropdown>
        <DropdownItem action={action("onClick")} value="Save now" />
        <DropdownItem action={action("onClick")} value="Share" />
        <DropdownItem action={action("onClick")} value="Delete" />
      </Dropdown>
    </div>
  ))
  .add("with separator", () => (
    <div style={{ display: "flex" }}>
      <Dropdown>
        <DropdownItem action={action("onClick")} value="Save now" />
        <DropdownSeparator />
        <DropdownItem action={action("onClick")} value="Share" />
        <DropdownItem action={action("onClick")} value="Attribute" />
        <DropdownItem action={action("onClick")} value="View history" />
        <DropdownSeparator />
        <DropdownItem action={action("onClick")} value="Delete" />
      </Dropdown>
    </div>
  ))
  .add("with icons", () => (
    <div style={{ display: "flex" }}>
      <Dropdown>
        <DropdownItem action={action("onClick")} icon={<IconNote />} value="Note" />
        <DropdownItem action={action("onClick")} icon={<IconStar />} value="Insight" />
        <DropdownItem action={action("onClick")} icon={<IconTag />} value="Tag" />
      </Dropdown>
    </div>
  ))
  .add("maxHeight", () => (
    <div style={{ display: "flex" }}>
      <Dropdown maxHeight={240}>
        <DropdownItem active action={action("onClick")} value="Brisbane" />
        <DropdownItem action={action("onClick")} value="Canberra" />
        <DropdownItem action={action("onClick")} value="Christchurch" />
        <DropdownItem action={action("onClick")} value="Dunedin" />
        <DropdownItem action={action("onClick")} value="London" />
        <DropdownItem action={action("onClick")} value="Los Angeles" />
        <DropdownItem action={action("onClick")} value="Melbourne" />
        <DropdownItem action={action("onClick")} value="New York City" />
        <DropdownItem action={action("onClick")} value="San Francisco" />
        <DropdownItem action={action("onClick")} value="Sydney" />
        <DropdownItem action={action("onClick")} value="Wellington" />
      </Dropdown>
    </div>
  ))
  .add("with arrow", () => (
    <div style={{ display: "flex" }}>
      <Dropdown autofocus>
        <DropdownItem action={action("onClick")} value="Save now" />
        <DropdownItem action={action("onClick")} arrow value="Share" />
        <DropdownItem action={action("onClick")} value="Delete" />
      </Dropdown>
    </div>
  ))
  .add("with wrapping items", () => (
    <div style={{ display: "flex" }}>
      <Dropdown autofocus maxWidth={256}>
        <DropdownItem action={action("onClick")} value="First" wrap />
        <DropdownItem action={action("onClick")} value="Second" wrap />
        <DropdownItem action={action("onClick")} value="Third" wrap />
      </Dropdown>
    </div>
  ));
