import * as React from "react";
import { styled } from "typestyle-react";
import { BORDER_RADIUS, COLORS } from "../styles";

export const Box = styled(
  "div",
  ({ color = COLORS.i08, padding = 8, size }: { color?: string; padding?: number; size?: number }) => ({
    background: color,
    borderRadius: BORDER_RADIUS,
    display: "flex",
    height: size,
    padding: padding,
    width: size
  })
);

export const Container: React.StatelessComponent = ({ children }) => <div style={{ width: 200 }}>{children}</div>;
