import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SubtleButton } from "..";
import { IconArrowUp, IconMoreHorizontal } from "../../..";

storiesOf(SubtleButton.name, module)
  .add("Empty", () => <SubtleButton onClick={action("click")} />)
  .add("Text", () => <SubtleButton onClick={action("click")}>Text</SubtleButton>)
  .add("Icon", () => (
    <SubtleButton onClick={action("click")}>
      <IconMoreHorizontal />
    </SubtleButton>
  ))
  .add("Text + Icon", () => (
    <SubtleButton onClick={action("click")}>
      Button <IconArrowUp />
    </SubtleButton>
  ));
