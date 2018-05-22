import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Flow } from "../";
import { Item } from "../../Item";

storiesOf("Flow", module)
  .add("default gaps", () => (
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
      </Flow>
    </Container>
  ))
  .add("with gap=10", () => (
    <Container>
      <Flow styled={{ gap: 10, rowGap: 10 }}>
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
      </Flow>
    </Container>
  ));

const Box: React.StatelessComponent = ({ children }) => (
  <span
    style={{
      backgroundColor: "lightgrey",
      display: "inline-block",
      height: 30
    }}
  >
    {children}
  </span>
);

const Container: React.StatelessComponent = ({ children }) => (
  <div style={{ backgroundColor: "grey", width: 150 }}>{children}</div>
);
