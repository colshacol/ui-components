import { storiesOf } from "@storybook/react";
import * as React from "react";
import { COLORS } from "src/styles";
import { ColorPicker } from "../";

storiesOf("ColorPicker", module).add("Interactive", () => {
  interface State {
    selected: string | null;
  }
  class Example extends React.PureComponent<{}, State> {
    public state: Readonly<State> = { selected: null };

    public render() {
      return (
        <div style={{ display: "flex" }}>
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
            selected={this.state.selected}
            onSelect={color => {
              this.setState({ selected: color });
            }}
          />
        </div>
      );
    }
  }

  return <Example />;
});
