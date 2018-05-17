import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SubtleButtonLink } from "..";
import { IconArrowUp } from "../../..";
import { location } from "../../../routing";

const url = "http://example.com";
const exampleLocation = location.external(url);

storiesOf(SubtleButtonLink.name, module)
  .add("Example", () => <SubtleButtonLink location={exampleLocation}>{url}</SubtleButtonLink>)
  .add("Inherit surrounding color", () => (
    <p style={{ color: "green" }}>
      Demo text <SubtleButtonLink location={exampleLocation}>{url}</SubtleButtonLink> demo text.
    </p>
  ))
  .add("Text + Icon", () => (
    <SubtleButtonLink location={exampleLocation}>
      {url} <IconArrowUp />
    </SubtleButtonLink>
  ));
