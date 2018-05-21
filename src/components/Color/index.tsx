import * as React from "react";
import IconCheckMini from "src/icons/IconCheckMini";
import IconMinus from "src/icons/IconMinus";
import { BORDER_RADIUS, COLORS } from "src/styles";
import CacheComputed from "src/util/CacheComputed";
import { style } from "typestyle";

interface Props {
  color: string;
  onClick?: () => void;
  selected?: boolean;
  strikethrough?: boolean;
}

export class Color extends React.PureComponent<Props> {
  public render() {
    const { color, onClick, selected = false, strikethrough = false } = this.props;
    return (
      <button className={colorStyleClassCache.get(color)} onClick={onClick}>
        {selected ? <IconCheckMini /> : null}
        {strikethrough ? <IconMinus color="#C4C2CB" /> : null}
      </button>
    );
  }
}

const colorStyleClassCache = new CacheComputed<string, string>(
  color => color,
  color =>
    style({
      $nest: {
        "&:hover": {
          cursor: "pointer",
          opacity: 0.9
        },
        "&:active": {
          opacity: 1
        },
        "&:focus": {
          boxShadow: `0 0 0 2px ${COLORS.white}, 0 0 0 4px ${color}`
        }
      },

      alignItems: "center",
      backgroundColor: color,
      borderRadius: BORDER_RADIUS,
      border: "none",
      color: COLORS.white,
      display: "flex",
      height: "32px",
      justifyContent: "center",
      outline: "none",
      width: "32px"
    })
);
