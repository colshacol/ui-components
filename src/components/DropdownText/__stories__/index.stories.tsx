import { storiesOf } from "@storybook/react";
import * as React from "react";
import { DropdownText } from "../";

storiesOf(DropdownText.name, module)
  .add("Single line", () => <DropdownText lines={["Attribute"]} />)
  .add("Multiple lines", () => <DropdownText lines={["Created", "2017-01-01"]} />);
