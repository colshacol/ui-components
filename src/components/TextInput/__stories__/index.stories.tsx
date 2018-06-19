import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { TextInput } from "../";
import { Container } from "../../../util/stories";

storiesOf(TextInput.name, module)
  .add("Autofocus", () => <TextInput autoFocus value="Bradley Ayers" />)
  .add("Custom height", () => <TextInput height={32} value="Bradley Ayers" />)
  .add("Disabled", () => <TextInput disabled value="Bradley Ayers" />)
  .add("Empty", () => <TextInput />)
  .add("Error", () => <TextInput error="Invalid value" />)
  .add("Overflow", () => (
    <Container>
      <TextInput
        onChange={action("onChange")}
        value="Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps."
      />
    </Container>
  ))
  .add("Placeholder", () => <TextInput onChange={action("onChange")} placeholder="First name" />)
  .add("Value", () => <TextInput value="Bradley Ayers" />)
  .add("Facade (select)", () => <TextInput value="Bradley Ayers" facade="select" />)
  .add("Facade (disabled, select)", () => <TextInput value="Bradley Ayers" disabled facade="select" />);
