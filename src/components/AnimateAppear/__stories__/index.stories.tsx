import { storiesOf } from "@storybook/react";
import * as React from "react";
import { styled } from "typestyle-react";
import { AnimateAppear } from "../";
import { Layer } from "../../Layer";
import { Portal } from "../../Portal";

storiesOf("AnimateAppear", module)
  .add("Basic", () => (
    <AnimateAppear>
      <RedBox />
    </AnimateAppear>
  ))
  .add("Slide right", () => (
    <AnimateAppear x={-8}>
      <RedBox />
    </AnimateAppear>
  ))
  .add("Slide down", () => (
    <AnimateAppear y={-8}>
      <RedBox />
    </AnimateAppear>
  ))
  .add("via <Portal><Layer><AnimateAppear/></Layer></Portal>", () => (
    <>
      <BlueBox id="anchor" />
      <Portal>
        <Layer parentId="anchor" align="right">
          <AnimateAppear>
            <RedBox />
          </AnimateAppear>
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
  width: "100px",
  height: "100px"
});
