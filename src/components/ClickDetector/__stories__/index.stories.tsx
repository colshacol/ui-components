import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ClickDetector } from "../";
import { COLORS } from "../../../styles";
import { Box } from "../../../util/stories";
import { Button } from "../../Button";
import { FilePicker } from "../../FilePicker";
import { FlipFlop } from "../../FlipFlop";

storiesOf(ClickDetector.name, module)
  .add("Default", () => (
    <FlipFlop>
      {({ active, setOff, setOn }) => (
        <ClickDetector
          onClick={() => {
            setOn();
            action("onClick")();
          }}
          onOutsideClick={() => {
            setOff();
            action("onOutsideClick")();
          }}
        >
          {props => <Box {...props} styled={{ color: active ? COLORS.blue : COLORS.orange, size: 64 }} />}
        </ClickDetector>
      )}
    </FlipFlop>
  ))
  .add("<FilePicker /> test", () => (
    <ClickDetector onClick={action("onClick")} onOutsideClick={action("onOutsideClick")}>
      {props => (
        <FlipFlop>
          {({ active, toggle }) => (
            <Box {...props} styled={{ color: active ? COLORS.blue : COLORS.orange, size: 64 * 4 }}>
              <Button onClick={toggle}>
                {active ? "Unmount" : "Mount"} <code>{`<FilePicker />`}</code>
              </Button>
              {active ? <FilePicker onPick={action("onPick")} /> : null}
            </Box>
          )}
        </FlipFlop>
      )}
    </ClickDetector>
  ));
