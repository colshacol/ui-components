import * as React from "react";
import { styled } from "typestyle-react";

// https://github.com/Microsoft/TypeScript/issues/5711
React;

export interface Props {
  gridTemplateColumns?: string;
  gap?: number;
}

const DEFAULT_GRID_TEMPLATE_COLUMNS = "1fr 1fr";
const DEFAULT_GAP = 24;

export const Grid = styled("div", ({ gridTemplateColumns = DEFAULT_GRID_TEMPLATE_COLUMNS, gap = DEFAULT_GAP }: Props) => ({
  alignItems: "stretch",
  display: "grid",
  gridGap: `${gap}px`,
  gridTemplateColumns: `${gridTemplateColumns}`,
  justifyItems: "stretch"
}));
