import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Flow } from "../";
import { Box, Container } from "../../../util/stories";
import { Item } from "../../Item";

storiesOf("Flow", module)
  .add("Default", () => (
    <Container>
      <Flow>
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
      </Flow>
    </Container>
  ))
  .add("Custom gap", () => (
    <Container>
      <Flow styled={{ gap: 16, rowGap: 16 }}>
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
      </Flow>
    </Container>
  ));
