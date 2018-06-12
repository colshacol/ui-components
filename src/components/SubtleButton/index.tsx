import * as React from "react";
import { styled } from "typestyle-react";
import { BOX_SHADOW_FOCUS } from "../../styles";
import { DISABLED_OPACITY, buttonBaseProperties } from "../Button";

export interface Props {
  children?: React.ReactNode;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  height?: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export class SubtleButton extends React.PureComponent<Props> {
  public render() {
    const { children, color, disabled = false, fullWidth, height, id, onClick } = this.props;
    const inner = { id: id, onClick: onClick, type: "button" };

    return (
      <SubtleButtonStyle styled={{ color, disabled, fullWidth, height }} {...inner}>
        {children}
      </SubtleButtonStyle>
    );
  }
}

export const SubtleButtonStyle = styled(
  "button",
  buttonBaseProperties,
  ({
    color = "inherit",
    disabled,
    fullWidth = false,
    height = 32
  }: {
    color?: string;
    disabled: boolean;
    fullWidth?: boolean;
    height?: number;
  }) => ({
    backgroundColor: "transparent",
    color: color,
    height: `${height}px`,
    lineHeight: `${height}px`,
    maxWidth: "100%",
    padding: "0 8px",
    pointerEvents: disabled ? "none" : undefined,
    opacity: disabled ? DISABLED_OPACITY : undefined,
    width: fullWidth ? "100%" : "auto",

    $nest: {
      "&:hover": {
        backgroundColor: "rgba(36, 18, 77, 0.04)"
      },
      "&:active": {
        backgroundColor: "rgba(36, 18, 77, 0.08)"
      },
      "&:focus": {
        boxShadow: BOX_SHADOW_FOCUS
      }
    }
  })
);
