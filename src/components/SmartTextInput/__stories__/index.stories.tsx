import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SmartTextInput } from "../";

storiesOf(SmartTextInput.name, module)
  .add("Custom height", () => <SmartTextInput height={32} onSave={action("onSave")} value="Bradley Ayers" />)
  .add("Disabled", () => <SmartTextInput disabled height={32} onSave={action("onSave")} value="Bradley Ayers" />)
  .add("Error", () => <SmartTextInput onSave={action("onSave")} error="Invalid value" value="Bradley Ayers" />);
