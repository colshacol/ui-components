import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Color } from "../";

storiesOf("Color", module)
  .add("Custom color", () => <Color color={"#009688"} />)
  .add("Selected", () => <Color color={"#009688"} selected />);
