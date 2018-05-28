import { storiesOf } from "@storybook/react";
import * as React from "react";
import { AnimateSlideDown } from "../";
import { BlueBox, RedBox } from "../../../util/stories";
import { Layer } from "../../Layer";
import { Portal } from "../../Portal";

storiesOf(AnimateSlideDown.name, module)
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
