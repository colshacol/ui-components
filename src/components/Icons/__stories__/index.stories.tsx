import { storiesOf } from "@storybook/react";
import * as React from "react";
import { styled } from "typestyle-react";
import AllIcons from "../__all";

storiesOf("Icons", module).add("All icons", () => {
  return (
    <Container>
      {Object.keys(AllIcons)
        .map(key => ({ name: key, Icon: (AllIcons as { [key: string]: React.ComponentClass })[key] }))
        .map(({ name, Icon }) => {
          return (
            <IconContainer key={name}>
              <IconIcon>
                <Icon />
              </IconIcon>
              <IconLabel>{name}</IconLabel>
            </IconContainer>
          );
        })}
    </Container>
  );
});

const Container = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "600px"
});

const IconContainer = styled("div", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  fontSize: "10px",
  fontWeight: 600,
  height: "60px",
  margin: "8px",
  width: "100px"
});

const IconIcon = styled("div", {
  alignItems: "center",
  display: "flex",
  flexGrow: 1
});

const IconLabel = styled("div", {
  flexGrow: 0
});
