import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ProgressBar } from "../";
import { COLORS } from "../../../styles";
import { Box } from "../../../util/stories";

storiesOf(ProgressBar.name, module)
  .add("Dark", () => {
    interface State {
      completed: number;
    }

    class Example extends React.PureComponent<{}, State> {
      public state: Readonly<State> = { completed: 0 };
      private interval = 0;

      public componentDidMount() {
        this.interval = window.setInterval(() => {
          this.setState({ completed: this.state.completed + Math.random() * 1 });
        }, 500);
      }

      public componentWillUnmount() {
        window.clearInterval(this.interval);
      }

      public render() {
        return (
          <Box styled={{ color: COLORS.i08, padding: 24 }}>
            <ProgressBar completed={this.state.completed} />
          </Box>
        );
      }
    }

    return <Example />;
  })
  .add("Light", () => {
    interface State {
      completed: number;
    }

    class Example extends React.PureComponent<{}, State> {
      public state: Readonly<State> = { completed: 0 };
      private interval = 0;

      public componentDidMount() {
        this.interval = window.setInterval(() => {
          this.setState({ completed: this.state.completed + Math.random() * 1 });
        }, 500);
      }

      public componentWillUnmount() {
        window.clearInterval(this.interval);
      }

      public render() {
        return (
          <Box styled={{ color: COLORS.indigo, padding: 24 }}>
            <ProgressBar completed={this.state.completed} style="light" />
          </Box>
        );
      }
    }

    return <Example />;
  });
