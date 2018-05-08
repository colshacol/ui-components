import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SubtleButtonLink } from "..";
import { location } from "../../../routing";

storiesOf(SubtleButtonLink.name, module).add("Example", () => (
  <SubtleButtonLink location={location.external("http://example.com")}>http://example.com</SubtleButtonLink>
));
