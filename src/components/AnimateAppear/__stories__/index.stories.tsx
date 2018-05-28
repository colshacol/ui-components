import { storiesOf } from "@storybook/react";
import * as React from "react";
import { AnimateAppear } from "../";
import { BlueBox, RedBox } from "../../../util/stories";
import { Layer } from "../../Layer";
import { Portal } from "../../Portal";

storiesOf(AnimateAppear.name, module)
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
  .add("Rotate Y", () => (
    <AnimateAppear ry={180}>
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
