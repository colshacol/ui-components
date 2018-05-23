import * as React from "react";
import { BORDER_RADIUS, COLORS } from "../styles";

export const Box: React.StatelessComponent = ({ children }) => {
  return <div style={{ backgroundColor: COLORS.i08, borderRadius: BORDER_RADIUS, padding: "8px" }}>{children}</div>;
};

export const Container: React.StatelessComponent = ({ children }) => <div style={{ width: 200 }}>{children}</div>;
