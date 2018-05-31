import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SubtleButton } from "..";
import { COLORS, Flow, IconArrowRightMini, IconMoreHorizontal, Item } from "../../..";
import { Container } from "../../../util/stories";

storiesOf(SubtleButton.name, module)
  .add("Default", () => <SubtleButton onClick={action("onClick")}>Default</SubtleButton>)
  .add("Disabled", () => (
    <SubtleButton onClick={action("onClick")} disabled>
      Disabled
    </SubtleButton>
  ))
  .add("Color prop", () => (
    <SubtleButton color={COLORS.purple} onClick={action("onClick")}>
      Purple button
    </SubtleButton>
  ))
  .add("Color inherit", () => (
    <div style={{ color: COLORS.green }}>
      <SubtleButton onClick={action("onClick")}>Green button</SubtleButton>
    </div>
  ))
  .add("Centered", () => (
    <div style={{ textAlign: "center" }}>
      <SubtleButton onClick={action("onClick")}>Button in the middle of the screen</SubtleButton>
    </div>
  ))
  .add("Full width", () => (
    <SubtleButton fullWidth onClick={action("onClick")}>
      Full width
    </SubtleButton>
  ))
  .add("Full width overflow", () => (
    <Container>
      <SubtleButton fullWidth onClick={action("onClick")}>
        Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps.
      </SubtleButton>
    </Container>
  ))
  .add("Custom height", () => (
    <SubtleButton height={24} onClick={action("onClick")}>
      Custom height
    </SubtleButton>
  ))
  .add("Icon", () => (
    <SubtleButton onClick={action("onClick")}>
      <IconMoreHorizontal />
    </SubtleButton>
  ))
  .add("Text + Icon", () => (
    <SubtleButton onClick={action("onClick")}>
      <Flow styled={{ gap: 4 }}>
        <Item>Button</Item>
        <Item>
          <IconArrowRightMini />
        </Item>
      </Flow>
    </SubtleButton>
  ));
