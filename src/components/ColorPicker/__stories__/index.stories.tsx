import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ColorPicker } from "../";
import { COLORS } from "../../../styles";

storiesOf(ColorPicker.name, module)
  .add("Interactive", () => (
    <ColorPicker
      colors={[
        COLORS.magenta,
        COLORS.purple,
        COLORS.blue,
        COLORS.teal,
        COLORS.green,
        COLORS.lime,
        COLORS.yellow,
        COLORS.chocolate,
        COLORS.orange
      ]}
      selected={COLORS.purple}
      onSelect={action("onSelect")}
    />
  ))
  .add("Disallow custom", () => (
    <ColorPicker
      allowCustom={false}
      colors={[
        COLORS.magenta,
        COLORS.purple,
        COLORS.blue,
        COLORS.teal,
        COLORS.green,
        COLORS.lime,
        COLORS.yellow,
        COLORS.chocolate,
        COLORS.orange
      ]}
      selected={COLORS.purple}
      onSelect={action("onSelect")}
    />
  ));
