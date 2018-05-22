import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Flex } from "../";
import { Item } from "../../Item";

storiesOf("Flex", module)
  .add("row", () => (
    <Flex styled={{ layout: "row" }}>
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Flex>
  ))
  .add("row gap=10", () => (
    <Flex styled={{ layout: "row", gap: 10 }}>
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Flex>
  ))
  .add("column", () => (
    <Flex styled={{ layout: "column" }}>
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Flex>
  ))
  .add("column gap=10", () => (
    <Flex styled={{ layout: "column", gap: 10 }}>
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Flex>
  ));

const Slate: React.StatelessComponent = ({ children }) => {
  return <div style={{ backgroundColor: "lightgrey" }}>{children}</div>;
};
