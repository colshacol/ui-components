import { storiesOf } from "@storybook/react";
import * as React from "react";
import { KeyboardListener } from "../";

storiesOf(KeyboardListener.name, module)
  .add("Enter", () => (
    <>
      Click here to focus the iFrame then hit Enter
      <KeyboardListener eventType="keydown" eventKey="Enter" onEvent={() => alert("Enter pressed!")} />
    </>
  ))
  .add("Escape", () => (
    <>
      Click here to focus the iFrame then hit Escape
      <KeyboardListener eventType="keydown" eventKey="Escape" onEvent={() => alert("Escape pressed!")} />
    </>
  ))
  .add("Tab", () => (
    <>
      Click here to focus the iFrame then hit Tab
      <KeyboardListener eventType="keydown" eventKey="Tab" onEvent={() => alert("Tab pressed!")} />
    </>
  ));
