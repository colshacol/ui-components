import { storiesOf } from "@storybook/react";
import * as React from "react";
import { AnimateAppear } from "../";
import { COLORS } from "../../../styles";
import { Box } from "../../../util/stories";
import { Layer } from "../../Layer";
import { Portal } from "../../Portal";

storiesOf(AnimateAppear.name, module)
  .add("Basic", () => (
    <AnimateAppear>
      <Box styled={{ color: COLORS.orange, size: 64 }} />
    </AnimateAppear>
  ))
  .add("Slide right", () => (
    <AnimateAppear x={-8}>
      <Box styled={{ color: COLORS.orange, size: 64 }} />
    </AnimateAppear>
  ))
  .add("Slide down", () => (
    <AnimateAppear y={-8}>
      <Box styled={{ color: COLORS.orange, size: 64 }} />
    </AnimateAppear>
  ))
  .add("Rotate Y", () => (
    <AnimateAppear ry={180}>
      <Box styled={{ color: COLORS.orange, size: 64 }} />
    </AnimateAppear>
  ))
  .add("via <Portal><Layer><AnimateAppear/></Layer></Portal>", () => (
    <>
      <Box id="anchor" styled={{ color: COLORS.orange, size: 64 }} />
      <Portal>
        <Layer parentId="anchor" align="right">
          <AnimateAppear>
            <Box styled={{ color: COLORS.blue, size: 48 }} />
          </AnimateAppear>
        </Layer>
      </Portal>
    </>
  ));
