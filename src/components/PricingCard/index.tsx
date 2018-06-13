import * as React from "react";
import { styled } from "typestyle-react";
import { BORDER_RADIUS, COLORS } from "../../styles";
import { Flex } from "../Flex";
import IconCheckCircle from "../Icons/IconCheckCircle";
import { Item } from "../Item";
import { SmallText } from "../SmallText";

export interface Props {
  features: string[];
  price: number;
}

export class PricingCard extends React.PureComponent<Props> {
  public render() {
    const { features, price } = this.props;

    return (
      <Wrapper>
        <Price>
          <Flex styled={{ gap: 24, layout: "column" }}>
            <Item style={{ position: "relative" }}>
              <DollarSign>$</DollarSign>
              <Amount>{price / 100}</Amount>
              <Frequency>/ month</Frequency>
            </Item>
            <Item>
              <FinePrint>
                <Flex styled={{ gap: 8, layout: "column" }}>
                  <Item>
                    <SmallText size={14}>Price per team</SmallText>
                  </Item>
                  <Item>
                    <SmallText size={14}>Billed monthly or yearly</SmallText>
                  </Item>
                </Flex>
              </FinePrint>
            </Item>
          </Flex>
        </Price>
        <Features>
          <Flex styled={{ gap: 24, layout: "column" }}>
            {features.map((feature, i) => (
              <Item key={i}>
                <Flex styled={{ alignItems: "center", gap: 24 }}>
                  <Item style={{ flexGrow: 0 }}>
                    <IconCheckCircle color={COLORS.green} />
                  </Item>
                  <Item style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{feature}</Item>
                </Flex>
              </Item>
            ))}
          </Flex>
        </Features>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  borderRadius: BORDER_RADIUS,
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  width: "100%"
});

const Price = styled("div", {
  alignItems: "center",
  backgroundColor: COLORS.p08,
  display: "flex",
  flex: "1 1 50%",
  fontWeight: 500,
  justifyContent: "center",
  padding: "32px"
});

const Features = styled("div", {
  backgroundColor: COLORS.p04,
  flex: "1 1 50%",
  overflow: "hidden",
  padding: "32px"
});

const DollarSign = styled("span", {
  fontSize: "24px",
  left: "-24px",
  position: "absolute",
  top: "16px"
});

const Amount = styled("span", {
  fontSize: "96px"
});

const Frequency = styled("span", {
  fontSize: "24px"
});

const FinePrint = styled("span", {
  textAlign: "center"
});
