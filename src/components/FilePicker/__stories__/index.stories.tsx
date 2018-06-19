import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FilePicker } from "../";
import { Button } from "../../Button";
import { FlipFlop } from "../../FlipFlop";

storiesOf(FilePicker.name, module).add("Default", () => (
  <FlipFlop>
    {({ active, toggle }) => (
      <>
        <Button onClick={toggle}>
          {active ? "Unmount" : "Mount"} <code>{`<FilePicker />`}</code>
        </Button>
        {active ? <FilePicker onPick={action("onPick")} /> : null}
      </>
    )}
  </FlipFlop>
));
