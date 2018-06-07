import * as React from "react";
import { styled } from "typestyle-react";
import { BORDER_RADIUS, BOX_SHADOW_FOCUS, COLORS } from "../../styles";
import IconCheckMini from "../Icons/IconCheckMini";
import IconMinus from "../Icons/IconMinus";

export interface Props {
  color: string;
  onClick?: () => void;
  selected?: boolean;
  strikethrough?: boolean;
}

export class Color extends React.PureComponent<Props> {
  public render() {
    const { color, onClick, selected = false, strikethrough = false } = this.props;
    return (
      <ColoredButton onClick={onClick} styled={{ color }}>
        {selected ? <IconCheckMini /> : null}
        {strikethrough ? <IconMinus color="#C4C2CB" /> : null}
      </ColoredButton>
    );
  }
}

const ColoredButton = styled("button", (props: { color: string }) => ({
  $nest: {
    "&:hover": {
      cursor: "pointer",
      opacity: 0.9
    },
    "&:active": {
      opacity: 1
    },
    "&:focus": {
      boxShadow: BOX_SHADOW_FOCUS
    }
  },

  alignItems: "center",
  backgroundColor: props.color,
  borderRadius: BORDER_RADIUS,
  border: "none",
  color: COLORS.white,
  display: "flex",
  height: "32px",
  justifyContent: "center",
  outline: "none",
  width: "32px"
}));
