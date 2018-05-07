import { StoryDecorator } from "@storybook/react";
import * as React from "react";
import { cssRule } from "typestyle";
import { ThemeGlobalStyles } from "../src/components/ThemeGlobalStyles";

class StorybookStyles extends React.Component {
  componentDidMount() {
    cssRule("body", {
      margin: "16px"
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
    {story()}
  </>
);
