import { storiesOf } from "@storybook/react";
import * as React from "react";
import { styled } from "typestyle-react";
import { COLORS } from "../../..";
import { BORDER_RADIUS } from "../../../styles";

storiesOf("Colors", module).add("All colors", () => (
  <Container>
    {Object.keys(COLORS).map((key, i) => (
      <ColorWrapper key={i}>
        <Color style={{ backgroundColor: (COLORS as { [key: string]: string })[key] }} />
        <p>{key}</p>
        <p>{(COLORS as { [key: string]: string })[key]}</p>
      </ColorWrapper>
    ))}
  </Container>
));

const Container = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "644px"
});

const ColorWrapper = styled("div", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  fontSize: "10px",
  fontWeight: 600,
  margin: "8px"
});

const Color = styled("div", {
  borderRadius: BORDER_RADIUS,
  height: "64px",
  marginBottom: "4px",
  width: "64px"
});
