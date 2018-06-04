import { storiesOf } from "@storybook/react";
import * as React from "react";
import { OnHover } from "../";
import { COLORS } from "../../../styles";
import { Box } from "../../../util/stories";

storiesOf(OnHover.name, module).add("Default", () => {
  interface State {
    hovered: boolean;
  }

  class Example extends React.PureComponent<{}, State> {
    public state: Readonly<State> = { hovered: false };

    public render() {
      return (
        <OnHover onMouseEnter={() => this.setState({ hovered: true })} onMouseLeave={() => this.setState({ hovered: false })}>
          <Box styled={{ color: this.state.hovered ? COLORS.i20 : undefined, size: 128 }}>Hover me!</Box>
        </OnHover>
      );
    }
  }

  return <Example />;
});
