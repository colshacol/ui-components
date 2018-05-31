import * as React from "react";
import { styled } from "typestyle-react";
import { BORDER_RADIUS, COLORS } from "../../styles";
import { AlignmentOptions, ShowOnHover } from "../ShowOnHover";

export interface Props {
  align?: AlignmentOptions;
  children: React.ReactNode;
  delay?: number;
  text?: string;
  altText?: string;
}

export class Tooltip extends React.Component<Props> {
  public render() {
    const { align, delay, altText, children, text } = this.props;
    return (
      <ShowOnHover
        align={align}
        delay={delay}
        renderAltComponent={altText !== undefined ? () => <TextContainer>{altText}</TextContainer> : undefined}
        renderComponent={text !== undefined ? () => <TextContainer>{text}</TextContainer> : undefined}
      >
        {children}
      </ShowOnHover>
    );
  }
}

const TextContainer = styled("div", {
  background: COLORS.indigo,
  borderRadius: BORDER_RADIUS,
  boxShadow: "0 16px 32px -4px rgba(0, 0, 0, .2)",
  color: "white",
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "16px",
  maxWidth: "256px",
  padding: "4px 8px"
});
