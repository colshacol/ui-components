import * as React from "react";
import { styled } from "typestyle-react";
import { COLORS } from "../../styles";

export interface Props {
  gap?: number;
  shade?: "light" | "dark" | "darker";
  size?: number;
}

export class SmallText extends React.PureComponent<Props> {
  public render() {
    const { children, gap = 0, shade = "dark", size = 12 } = this.props;
    let color: string;

    switch (shade) {
      case "light":
        color = "rgba(255, 255, 255, .8)";
        break;
      case "dark":
        color = "rgba(36, 18, 77, .6)";
        break;
      case "darker":
        color = COLORS.indigo;
        break;
      default:
        color = "rgba(36, 18, 77, .6)";
    }

    return <Text styled={{ gap, shade: color, size }}>{children}</Text>;
  }
}

const Text = styled("span", (props: { gap: number; shade: string; size: number }) => ({
  color: props.shade,
  fontSize: `${props.size}px`,
  fontWeight: 500,
  lineHeight: "16px",
  overflow: "hidden",
  padding: `0 ${props.gap}px`,
  textOverflow: "ellipsis"
}));
