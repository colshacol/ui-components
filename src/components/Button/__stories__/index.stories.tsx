import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Button } from "..";
import { COLORS } from "../../..";

storiesOf(Button.name, module)
  .add("Default", () => <Button onClick={action("click")}>Button</Button>)
  .add("Color", () => (
    <Button color={COLORS.purple} onClick={action("click")}>
      Button
    </Button>
  ));
