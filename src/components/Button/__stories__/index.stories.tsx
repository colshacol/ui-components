import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Button } from "..";

storiesOf(Button.name, module).add("Example", () => <Button onClick={action("click")}>Button</Button>);
