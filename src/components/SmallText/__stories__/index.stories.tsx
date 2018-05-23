import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SmallText } from "..";
import { Container } from "../../../util/stories";

storiesOf(SmallText.name, module)
  .add("Default", () => <SmallText>Small text</SmallText>)
  .add("Wrapping", () => (
    <Container>
      <SmallText>
        Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps.
      </SmallText>
    </Container>
  ));
