import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FlexWrap } from "../";
import { Item } from "../../Item";

storiesOf("Layout/FlexWrap", module).add("default", () => (
  <FlexWrap styled={{ gap: 32, maxChildWidth: 200 }}>
    <Item>
      <Slate>First</Slate>
    </Item>
    <Item>
      <Slate>Second</Slate>
    </Item>
  </FlexWrap>
));

const Slate: React.StatelessComponent = ({ children }) => {
  return <div style={{ backgroundColor: "lightgrey" }}>{children}</div>;
};
