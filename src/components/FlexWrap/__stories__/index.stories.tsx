import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FlexWrap } from "../";
import { Box } from "../../../util/stories";
import { Item } from "../../Item";

storiesOf("FlexWrap", module).add("Default", () => (
  <FlexWrap styled={{ gap: 32, maxChildWidth: 200 }}>
    <Item>
      <Box>First</Box>
    </Item>
    <Item>
      <Box>Second</Box>
    </Item>
    <Item>
      <Box>Third</Box>
    </Item>
    <Item>
      <Box>Fourth</Box>
    </Item>
    <Item>
      <Box>Fifth</Box>
    </Item>
    <Item>
      <Box>Sixth</Box>
    </Item>
    <Item>
      <Box>Seventh</Box>
    </Item>
    <Item>
      <Box>Eighth</Box>
    </Item>
  </FlexWrap>
));
