import * as React from "react";
import { cssRule } from "typestyle";
import { COLORS } from "../../styles";

export class ThemeGlobalStyles extends React.Component {
  public componentDidMount() {
    cssRule("*", {
      boxSizing: "border-box",
      "-webkit-tap-highlight-color": ["rgba(0,0,0,0)", "transparent"]
    });

    cssRule("html", {
      position: "relative"
    });

    cssRule("body", {
      color: COLORS.indigo,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      margin: 0,
      padding: 0,
      "-moz-osx-font-smoothing": "grayscale",
      "-webkit-font-smoothing": "antialiased"
    });

    cssRule("a", {
      color: "inherit",
      outline: "none",
      textDecoration: "none"
    });

    cssRule("p", {
      lineHeight: 1.75,
      margin: 0
    });

    cssRule("textarea, input", {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    });

    cssRule("::-webkit-input-placeholder", {
      color: COLORS.i40
    });

    // Thanks, Mozilla
    cssRule("::-moz-focus-inner", {
      border: "0 !important"
    });
  }

  public render() {
    return null;
  }
}
