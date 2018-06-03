import * as React from "react";
import { styled } from "typestyle-react";
import { BORDER_RADIUS, COLORS } from "../../styles";

export interface Props {
  completed: number;
  style?: "light" | "dark";
}

export class ProgressBar extends React.PureComponent<Props> {
  public render() {
    const { completed, style = "dark" } = this.props;

    return (
      <Wrapper styled={{ style }}>
        <Bar styled={{ style }} style={{ width: `${completed * 100}%` }} />
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", (props: { style: "light" | "dark" }) => ({
  backgroundColor: props.style === "dark" ? `rgba(36, 18, 77, 0.2)` : "rgba(255, 255, 255, 0.2)",
  borderRadius: BORDER_RADIUS,
  height: "4px",
  minWidth: "128px",
  position: "relative",
  overflow: "hidden",
  width: "100%"
}));

const Bar = styled("div", (props: { style: "light" | "dark" }) => ({
  backgroundColor: props.style === "dark" ? COLORS.purple : COLORS.white,
  bottom: 0,
  height: "4px",
  position: "absolute",
  transition: "width 500ms cubic-bezier(.2, .45, 0, 1)",
  left: 0,
  top: 0
}));
