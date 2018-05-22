import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ButtonLink } from "..";
import { COLORS, IconArrowUpRightMini } from '../../..';
import { location } from "../../../routing";

storiesOf(ButtonLink.name, module).add("Default", () => (
  <ButtonLink location={location.external("http://example.com")}>http://example.com</ButtonLink>
)).add("Color", () => (
  <ButtonLink color={COLORS.purple} location={location.external("http://example.com")}>http://example.com</ButtonLink>
))
.add("Full width", () => (
  <ButtonLink fullWidth location={location.external("http://example.com")}>
    Button
  </ButtonLink>
))
.add("Text + Icon", () => (
  <ButtonLink location={location.external("http://example.com")}>
    Button <IconArrowUpRightMini />
  </ButtonLink>
));
