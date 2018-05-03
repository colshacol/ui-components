import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SubtleButton } from "..";
import IconMoreHorizontal from "../../icons/IconMoreHorizontal";

storiesOf(SubtleButton.name, module)
  .add("Text", () => <SubtleButton onClick={action("click")}>Text</SubtleButton>)
  .add("Icon", () => (
    <SubtleButton onClick={action("click")}>
      <IconMoreHorizontal />
    </SubtleButton>
  ));
