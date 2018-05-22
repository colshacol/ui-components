import * as React from "react";
import { styled } from "typestyle-react";
import { Item } from "../Item";

// https://github.com/Microsoft/TypeScript/issues/5711
React;

export interface Props {
  alignItems?: "flex-start" | "flex-end" | "baseline" | "center" | "stretch";
  maxChildWidth?: number;
  gap: number;
  growItems?: boolean;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between";
}

export const FlexWrap = styled("div", ({ alignItems, maxChildWidth, gap, growItems, justifyContent }: Props) => {
  const halfGap = gap / 2;

  return {
    $nest: {
      [`& > .${Item.class}`]: {
        flexGrow: growItems === true ? 1 : 0,
        flexShrink: 1,
        flexBasis: maxChildWidth !== undefined ? `${maxChildWidth}px` : "auto",
        margin: halfGap
      }
    },

    alignItems: alignItems,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: justifyContent,
    margin: -halfGap
  };
});
