import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { TextInput } from "../";

storiesOf(TextInput.name, module)
  .add("Custom height", () => <TextInput height={32} value="Bradley Ayers" />)
  .add("Empty", () => <TextInput />)
  .add("Error", () => <TextInput error="Invalid value" />)
  .add("On change", () => <TextInput onChange={action("onChange")} />)
  .add("Placeholder", () => <TextInput placeholder="First name" />)
  .add("Value", () => <TextInput value="Bradley Ayers" />);
