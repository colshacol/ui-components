import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SubtleButtonLink } from "..";
import { ButtonLink, COLORS, Flow, IconArrowRightMini, IconMoreHorizontal, Item } from "../../..";
import { location } from "../../../routing";
import { Container } from "../../../util/stories";

const url = "http://example.com";
const exampleLocation = location.external(url);

storiesOf(SubtleButtonLink.name, module)
  .add("Default", () => <SubtleButtonLink location={exampleLocation}>Default</SubtleButtonLink>)
  .add("Disabled", () => (
    <SubtleButtonLink location={exampleLocation} disabled>
      Disabled
    </SubtleButtonLink>
  ))
  .add("Color prop", () => (
    <SubtleButtonLink color={COLORS.purple} location={exampleLocation}>
      Purple button
    </SubtleButtonLink>
  ))
  .add("Color inherit", () => (
    <div style={{ color: COLORS.green }}>
      <SubtleButtonLink location={exampleLocation}>Green button</SubtleButtonLink>
    </div>
  ))
  .add("Centered", () => (
    <div style={{ textAlign: "center" }}>
      <SubtleButtonLink location={exampleLocation}>Button in the middle of the screen</SubtleButtonLink>
    </div>
  ))
  .add("Full width", () => (
    <SubtleButtonLink fullWidth location={exampleLocation}>
      Full width
    </SubtleButtonLink>
  ))
  .add("Full width overflow", () => (
    <Container>
      <ButtonLink fullWidth location={location.external("http://example.com")}>
        Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps.
      </ButtonLink>
    </Container>
  ))
  .add("Custom height", () => (
    <SubtleButtonLink height={24} location={exampleLocation}>
      Custom height
    </SubtleButtonLink>
  ))
  .add("Icon", () => (
    <SubtleButtonLink location={exampleLocation}>
      <IconMoreHorizontal />
    </SubtleButtonLink>
  ))
  .add("Text + Icon", () => (
    <SubtleButtonLink location={exampleLocation}>
      <Flow styled={{ gap: 4 }}>
        <Item>Button</Item>
        <Item>
          <IconArrowRightMini />
        </Item>
      </Flow>
    </SubtleButtonLink>
  ));
