import * as React from "react";
import { styled } from "typestyle-react";
import { BORDER_RADIUS, COLORS } from "../styles";

export const Box: React.StatelessComponent = ({ children }) => {
  return <div style={{ backgroundColor: COLORS.i08, borderRadius: BORDER_RADIUS, padding: "8px" }}>{children}</div>;
};

export const Container: React.StatelessComponent = ({ children }) => <div style={{ width: 200 }}>{children}</div>;

export const RedBox = styled("div", ({ size = 64 }: { size?: number }) => ({
  background: COLORS.orange,
  borderRadius: BORDER_RADIUS,
  display: "flex",
  width: `${size}px`,
  height: `${size}px`
}));

export const BlueBox = styled("div", ({ size = 64 }: { size?: number }) => ({
  background: COLORS.blue,
  borderRadius: BORDER_RADIUS,
  display: "flex",
  width: `${size}px`,
  height: `${size}px`
}));
