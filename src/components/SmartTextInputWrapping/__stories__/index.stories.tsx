import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SmartTextInputWrapping } from "../";

storiesOf(SmartTextInputWrapping.name, module)
  .add("Autofocus", () => <SmartTextInputWrapping autofocus onSave={action("onSave")} value="Queenstown, New Zealand" />)
  .add("Default", () => <SmartTextInputWrapping onSave={action("onSave")} value="Queenstown, New Zealand" />)
  .add("Custom height", () => <SmartTextInputWrapping height={32} onSave={action("onSave")} value="Queenstown, New Zealand" />)
  .add("Custom minRows", () => (
    <SmartTextInputWrapping
      height={32}
      minRows={10}
      onSave={action("onSave")}
      value="Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps."
    />
  ))
  .add("Disabled", () => (
    <SmartTextInputWrapping
      disabled
      onSave={action("onSave")}
      value="Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps."
    />
  ))
  .add("Error", () => (
    <SmartTextInputWrapping error="Enter more information" onSave={action("onSave")} value="Queenstown, New Zealand" />
  ));
