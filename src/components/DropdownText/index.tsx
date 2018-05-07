import * as React from "react";
import { styled } from "typestyle-react";
import { SmallText } from "../SmallText";

const Container = styled("div", {
  margin: "0 24px",
  // Use padding to prevent space collapsing with Dropdown top and bottom
  // margins.
  padding: "8px 0"
});

const Line = styled("div", {
  display: "block",
  margin: "4px 0",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});

export function DropdownText({ lines }: { lines: string[] }) {
  return (
    <Container>
      <SmallText>{lines.map((line, i) => <Line key={i}>{line}</Line>)}</SmallText>
    </Container>
  );
}
