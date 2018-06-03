import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Tooltip } from "../";
import { Box } from "../../../util/stories";

storiesOf(Tooltip.name, module)
  .add("Default", () => (
    <Tooltip text="Tooltip text">
      <Box>Hover me!</Box>
    </Tooltip>
  ))
  .add("Long text", () => (
    <Tooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis ultricies vehicula. Vestibulum in elit orci. Aliquam eu eros in erat iaculis tincidunt. Pellentesque sed turpis in sapien pretium pellentesque eget a tortor.">
      <Box>Hover me!</Box>
    </Tooltip>
  ));
