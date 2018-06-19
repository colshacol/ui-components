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
  .add("Multiple shades", () => (
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
        COLORS.orange,
        COLORS.m40,
        COLORS.p40,
        COLORS.b40,
        COLORS.t40,
        COLORS.g40,
        COLORS.l40,
        COLORS.y40,
        COLORS.c40,
        COLORS.o40
      ]}
      selected={COLORS.purple}
      onSelect={action("onSelect")}
      width={120}
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
