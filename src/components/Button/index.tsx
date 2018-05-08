import * as React from "react";
import { styled } from "typestyle-react";
import {
  BORDER_RADIUS,
  BOX_SHADOW_BORDER,
  BOX_SHADOW_BORDER_DARKER,
  BOX_SHADOW_FOCUS,
  BOX_SHADOW_SITTING,
  COLORS
} from "../../styles";

export interface Props {
  children?: React.ReactChild;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  height?: number;
  id?: string;
  onClick: () => void;
}

export class Button extends React.Component<Props> {
  public render() {
    const { children, color, disabled = false, fullWidth, height, id, onClick } = this.props;
    const inner = { id: id, onClick: onClick, style: buttonBaseStyles, tabIndex: disabled ? -1 : 0, type: "button" };

    return color !== undefined ? (
      <ColoredButtonStyle styled={{ color, disabled, fullWidth, height }} {...inner}>
        {children}
      </ColoredButtonStyle>
    ) : (
      <DefaultButtonStyle styled={{ disabled, fullWidth, height }} {...inner}>
        {children}
      </DefaultButtonStyle>
    );
  }
}

const DISABLED_OPACITY = 0.5;

export const ColoredButtonStyle = styled(
  "button",
  ({
    color,
    disabled,
    fullWidth = false,
    height = 40
  }: {
    color: string;
    disabled: boolean;
    fullWidth?: boolean;
    height?: number;
  }) => ({
    backgroundColor: color,
    boxShadow: BOX_SHADOW_SITTING,
    color: COLORS.white,
    height: `${height}px`,
    lineHeight: `${height}px`,
    padding: "0 12px",
    pointerEvents: disabled ? "none" : undefined,
    opacity: disabled ? DISABLED_OPACITY : undefined,
    width: fullWidth ? "100%" : "auto",

    $nest: {
      "&:hover": {
        boxShadow: BOX_SHADOW_SITTING,
        opacity: disabled ? DISABLED_OPACITY : 0.95
      },
      "&:active": {
        opacity: disabled ? DISABLED_OPACITY : 1
      },
      "&:focus": {
        boxShadow: BOX_SHADOW_FOCUS
      }
    }
  })
);

export const DefaultButtonStyle = styled(
  "button",
  ({ disabled, fullWidth = false, height = 40 }: { disabled: boolean; fullWidth?: boolean; height?: number }) => ({
    backgroundColor: COLORS.white,
    boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_SITTING}`,
    color: COLORS.i60,
    height: `${height}px`,
    lineHeight: `${height}px`,
    padding: "0 12px",
    pointerEvents: disabled ? "none" : undefined,
    opacity: disabled ? DISABLED_OPACITY : undefined,
    width: fullWidth ? "100%" : "auto",

    $nest: {
      "&:hover": {
        boxShadow: `${BOX_SHADOW_BORDER_DARKER}, ${BOX_SHADOW_SITTING}`,
        color: COLORS.indigo
      },
      "&:active": {
        backgroundColor: COLORS.i02
      },
      "&:focus": {
        boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_FOCUS}`
      }
    }
  })
);

export const buttonBaseStyles = {
  borderRadius: BORDER_RADIUS,
  border: "none",
  cursor: "pointer",
  display: "inline-block" as "inline-block",
  fontSize: "14px",
  fontWeight: 500 as 500,
  margin: 0,
  outline: "none",
  overflow: "hidden" as "hidden",
  textOverflow: "ellipsis",
  verticalAlign: "middle",
  whiteSpace: "nowrap" as "nowrap"
};