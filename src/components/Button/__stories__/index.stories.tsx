import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Button } from "..";
import { COLORS, Flow, IconArrowRightMini, IconArrowUpRight, Item } from "../../..";
import { Container } from "../../../util/stories";

storiesOf(Button.name, module)
  .add("Default", () => <Button onClick={action("onClick")}>Button</Button>)
  .add("Color", () => (
    <Button color={COLORS.purple} onClick={action("onClick")}>
      Button
    </Button>
  ))
  .add("Centered", () => (
    <div style={{ textAlign: "center" }}>
      <Button onClick={action("onClick")}>Button in the middle of the screen</Button>
    </div>
  ))
  .add("Full width", () => (
    <Button fullWidth onClick={action("onClick")}>
      100% width button
    </Button>
  ))
  .add("Full width overflow", () => (
    <Container>
      <Button fullWidth onClick={action("onClick")}>
        Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps.
      </Button>
    </Container>
  ))
  .add("Icon", () => (
    <Button onClick={action("onClick")}>
      <IconArrowUpRight />
    </Button>
  ))
  .add("Text + Icon", () => (
    <Button onClick={action("onClick")}>
      <Flow styled={{ gap: 4 }}>
        <Item>Button</Item>
        <Item>
          <IconArrowRightMini />
        </Item>
      </Flow>
    </Button>
  ));
