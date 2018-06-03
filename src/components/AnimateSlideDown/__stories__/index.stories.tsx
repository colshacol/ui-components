import { storiesOf } from "@storybook/react";
import * as React from "react";
import { AnimateSlideDown } from "../";
import { COLORS } from "../../../styles";
import { Box } from "../../../util/stories";
import { Layer } from "../../Layer";
import { Portal } from "../../Portal";

storiesOf(AnimateSlideDown.name, module)
  .add("Basic", () => (
    <AnimateSlideDown>
      <Box styled={{ color: COLORS.orange, size: 64 }} />
    </AnimateSlideDown>
  ))
  .add("via <Portal><Layer><AnimateSlideDown/></Layer></Portal>", () => (
    <>
      <Box id="anchor" styled={{ color: COLORS.orange, size: 64 }} />
      <Portal>
        <Layer parentId="anchor" align="right">
          <AnimateSlideDown>
            <Box styled={{ color: COLORS.blue, size: 48 }} />
          </AnimateSlideDown>
        </Layer>
      </Portal>
    </>
  ));
