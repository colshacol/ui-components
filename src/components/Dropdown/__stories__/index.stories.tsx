import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Dropdown } from "../";
import { DropdownItem, DropdownSeparator, DropdownText } from "../../..";

storiesOf(Dropdown.name, module)
  .add("Default", () => (
    <div style={{ display: "flex" }}>
      <Dropdown>
        <DropdownItem action={action("onClick")} value="Save now" />
        <DropdownItem action={action("onClick")} value="Share" />
        <DropdownItem action={action("onClick")} value="Delete" />
      </Dropdown>
    </div>
  ))
  .add("Sections", () => (
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
  .add("Dropdown text", () => (
    <div style={{ display: "flex" }}>
      <Dropdown>
        <DropdownText lines={["Created", "2017-01-01"]} />
        <DropdownSeparator />
        <DropdownItem action={action("onClick")} value="Share" />
        <DropdownItem action={action("onClick")} value="Attribute" />
        <DropdownItem action={action("onClick")} value="View history" />
        <DropdownSeparator />
        <DropdownItem action={action("onClick")} value="Delete" />
      </Dropdown>
    </div>
  ))
  .add("Maximum height", () => (
    <div style={{ display: "flex" }}>
      <Dropdown maxHeight={192}>
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
  .add("Wrapping items", () => (
    <div style={{ display: "flex" }}>
      <Dropdown autofocus maxWidth={256}>
        <DropdownItem
          action={action("onClick")}
          value="Christchurch, known for its English heritage, is located on the east coast of New Zealand’s South Island."
          wrap
        />
        <DropdownItem
          action={action("onClick")}
          value="Dunedin is a city in New Zealand, at the head of Otago Harbour on the South Island’s southeast coast."
          wrap
        />
        <DropdownItem
          action={action("onClick")}
          value="Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps."
          wrap
        />
      </Dropdown>
    </div>
  ))
  .add("Items with arrow", () => (
    <div style={{ display: "flex" }}>
      <Dropdown autofocus>
        <DropdownItem action={action("onClick")} arrow value="Open file" />
        <DropdownSeparator />
        <DropdownItem action={action("onClick")} value="Delete" />
      </Dropdown>
    </div>
  ));
