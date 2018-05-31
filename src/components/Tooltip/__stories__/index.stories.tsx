import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Tooltip } from "../";
import { BlueBox } from "../../../util/stories";

storiesOf(Tooltip.name, module)
  .add("Default", () => (
    <Tooltip text="Tooltip text">
      <BlueBox styled={{ size: 32 }} />
    </Tooltip>
  ))
  .add("Long text", () => (
    <Tooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis ultricies vehicula. Vestibulum in elit orci. Aliquam eu eros in erat iaculis tincidunt. Pellentesque sed turpis in sapien pretium pellentesque eget a tortor.">
      <BlueBox styled={{ size: 32 }} />
    </Tooltip>
  ));
