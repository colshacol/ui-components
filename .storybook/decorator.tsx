import { StoryDecorator } from "@storybook/react";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { cssRule } from "typestyle";
import { ThemeGlobalStyles } from "../src/components/ThemeGlobalStyles";

class StorybookStyles extends React.Component {
  componentDidMount() {
    cssRule("body", {
      padding: "16px"
    });
  }

  render() {
    return null;
  }
}

export const decorator: StoryDecorator = story => (
  <>
    <ThemeGlobalStyles />
    <StorybookStyles />
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  </>
);
