import * as React from "react";
import { styled } from "typestyle-react";
import { COLORS } from "../../styles";

// https://github.com/Microsoft/TypeScript/issues/5711
React;

export const DropdownSeparator = styled("hr", {
  backgroundColor: COLORS.i08,
  border: "none",
  height: "1px",
  margin: "8px 24px"
});
