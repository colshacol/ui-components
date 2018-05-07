import { storiesOf } from "@storybook/react";
import * as React from "react";
import { DropdownText } from "../";

storiesOf(DropdownText.name, module)
  .add("single line", () => <DropdownText lines={["Attribute"]} />)
  .add("multiple line", () => <DropdownText lines={["Created", "2017-01-01"]} />);
