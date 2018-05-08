import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ButtonLink } from "..";
import { location } from "../../../routing";

storiesOf(ButtonLink.name, module).add("Example", () => (
  <ButtonLink location={location.external("http://example.com")}>http://example.com</ButtonLink>
));
