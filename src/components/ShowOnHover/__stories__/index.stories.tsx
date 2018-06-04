import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ShowOnHover } from "../";

storiesOf(ShowOnHover.name, module).add("Default", () => (
  <ShowOnHover renderComponent={() => "Hover component"}>
    <p>Hover me!</p>
  </ShowOnHover>
));
