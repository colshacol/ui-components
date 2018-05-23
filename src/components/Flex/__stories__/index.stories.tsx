import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Flex } from "../";
import { Box } from "../../../util/stories";
import { Item } from "../../Item";

storiesOf("Flex", module)
  .add("Row", () => (
    <Flex styled={{ layout: "row" }}>
      <Item>
        <Box>First</Box>
      </Item>
      <Item>
        <Box>Second</Box>
      </Item>
      <Item>
        <Box>Third</Box>
      </Item>
    </Flex>
  ))
  .add("Row with gap", () => (
    <Flex styled={{ layout: "row", gap: 16 }}>
      <Item>
        <Box>First</Box>
      </Item>
      <Item>
        <Box>Second</Box>
      </Item>
      <Item>
        <Box>Third</Box>
      </Item>
    </Flex>
  ))
  .add("Column", () => (
    <Flex styled={{ layout: "column" }}>
      <Item>
        <Box>First</Box>
      </Item>
      <Item>
        <Box>Second</Box>
      </Item>
      <Item>
        <Box>Third</Box>
      </Item>
    </Flex>
  ))
  .add("Column with gap", () => (
    <Flex styled={{ layout: "column", gap: 16 }}>
      <Item>
        <Box>First</Box>
      </Item>
      <Item>
        <Box>Second</Box>
      </Item>
      <Item>
        <Box>Third</Box>
      </Item>
    </Flex>
  ));
