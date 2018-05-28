import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Justify } from "../";
import { Item } from "../../..";
import { Box } from "../../../util/stories";

storiesOf("Justify", module)
  .add("row", () => (
    <Justify styled={{ layout: "row" }}>
      <Item>
        <Box>First</Box>
      </Item>
      <Item>
        <Box>Second</Box>
      </Item>
    </Justify>
  ))
  .add("column", () => (
    <Justify styled={{ layout: "column" }}>
      <Item>
        <Box>First</Box>
      </Item>
      <Item>
        <Box>Second</Box>
      </Item>
    </Justify>
  ));
