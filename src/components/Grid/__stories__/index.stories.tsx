import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Item } from "src/components/Item";
import { Grid } from "../";

storiesOf("Grid", module).add("default", () => (
  <Grid>
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
  </Grid>
));

const Box: React.StatelessComponent = ({ children }) => (
  <span
    style={{
      backgroundColor: "lightgrey",
      display: "inline-block",
      height: 30,
      width: "100%"
    }}
  >
    {children}
  </span>
);
