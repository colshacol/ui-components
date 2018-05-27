import { storiesOf } from "@storybook/react";
import * as React from "react";
import { styled } from "typestyle-react";
import { Layer } from "../";
import { Portal } from "../../Portal";

storiesOf(Layer.name, module)
  .add("Layer before target", () => (
    <>
      <Portal>
        <Layer parentId="redbox" align="right">
          <BlueBox />
        </Layer>
      </Portal>
      <Portal>
        <RedBox id="redbox" />
      </Portal>
    </>
  ))
  .add("Layer after target", () => (
    <>
      <Portal>
        <RedBox id="redbox" />
      </Portal>
      <Portal>
        <Layer parentId="redbox" align="right">
          <BlueBox />
        </Layer>
      </Portal>
    </>
  ));

const RedBox = styled("div", {
  background: "red",
  display: "flex",
  width: "100px",
  height: "100px"
});

const BlueBox = styled("div", {
  background: "blue",
  display: "flex",
  width: "50px",
  height: "50px"
});
