import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Sticky } from "../";
import { Box } from "../../../util/stories";

storiesOf(Sticky.name, module)
  .add("Default", () => (
    <div style={{ height: "6000px" }}>
      <Sticky>
        <Box>Scroll down and I should stick to the top of the page</Box>
      </Sticky>
    </div>
  ))
  .add("Offset", () => (
    <div style={{ height: "6000px" }}>
      <Sticky offset={16}>
        <Box>Scroll down and I should stick to the top of the page</Box>
      </Sticky>
    </div>
  ))
  .add("No shadow", () => (
    <div style={{ height: "6000px" }}>
      <Sticky offset={16} shadow={false}>
        <Box>Scroll down and I should stick to the top of the page</Box>
      </Sticky>
    </div>
  ));
