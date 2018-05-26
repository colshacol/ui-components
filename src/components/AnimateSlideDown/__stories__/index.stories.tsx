import { storiesOf } from "@storybook/react";
import * as React from "react";
import { styled } from "typestyle-react";
import { AnimateSlideDown } from "../";
import { Layer } from "../../Layer";
import { Portal } from "../../Portal";

storiesOf("AnimateSlideDown", module)
  .add("Basic", () => (
    <AnimateSlideDown>
      <RedBox />
    </AnimateSlideDown>
  ))
  .add("via <Portal><Layer><AnimateSlideDown/></Layer></Portal>", () => (
    <>
      <BlueBox id="anchor" />
      <Portal>
        <Layer parentId="anchor" align="right">
          <AnimateSlideDown>
            <RedBox />
          </AnimateSlideDown>
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
