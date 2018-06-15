import * as React from "react";
import { styled } from "typestyle-react";
import { BORDER_RADIUS, COLORS, Z_INDEX_HIGHEST } from "../../styles";

export interface Props {
  error?: string;
}

export class OptionalErrorOverlay extends React.PureComponent<Props> {
  public render() {
    const { children, error } = this.props;
    return error !== undefined ? (
      <Container>
        {children}
        <Error>{error}</Error>
      </Container>
    ) : (
      children
    );
  }
}

const Container = styled("span", {
  display: "block",
  position: "relative"
});

const Error = styled("span", {
  background: COLORS.orange,
  borderRadius: BORDER_RADIUS,
  bottom: "-4px",
  boxShadow: "0 3px 6px -2px rgba(0, 0, 0, .1)",
  color: COLORS.white,
  fontSize: ".75em",
  fontWeight: 600,
  height: "20px",
  lineHeight: "20px",
  margin: 0,
  padding: "0 10px",
  position: "absolute" as "absolute",
  right: "-4px",
  zIndex: Z_INDEX_HIGHEST
});
