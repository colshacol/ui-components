import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ButtonLink } from "..";
import { COLORS, Flow, IconArrowRightMini, IconArrowUpRight, Item } from "../../..";
import { location } from "../../../routing";
import { Container } from "../../../util/stories";

storiesOf(ButtonLink.name, module)
  .add("Default", () => <ButtonLink location={location.external("http://example.com")}>Button</ButtonLink>)
  .add("Color", () => (
    <ButtonLink color={COLORS.purple} location={location.external("http://example.com")}>
      Button
    </ButtonLink>
  ))
  .add("Custom height", () => (
    <ButtonLink height={24} location={location.external("http://example.com")}>
      Button
    </ButtonLink>
  ))
  .add("Centered", () => (
    <div style={{ textAlign: "center" }}>
      <ButtonLink location={location.external("http://example.com")}>Button in the middle of the screen</ButtonLink>
    </div>
  ))
  .add("Full width", () => (
    <ButtonLink fullWidth location={location.external("http://example.com")}>
      100% width button
    </ButtonLink>
  ))
  .add("Full width overflow", () => (
    <Container>
      <ButtonLink fullWidth location={location.external("http://example.com")}>
        Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps.
      </ButtonLink>
    </Container>
  ))
  .add("Icon", () => (
    <ButtonLink location={location.external("http://example.com")}>
      <IconArrowUpRight />
    </ButtonLink>
  ))
  .add("Text + Icon", () => (
    <ButtonLink location={location.external("http://example.com")}>
      <Flow styled={{ gap: 4 }}>
        <Item>Button</Item>
        <Item>
          <IconArrowRightMini />
        </Item>
      </Flow>
    </ButtonLink>
  ));
