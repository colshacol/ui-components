import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Layer } from "../";
import { COLORS } from "../../../styles";
import { Box } from "../../../util/stories";
import { Portal } from "../../Portal";

storiesOf(Layer.name, module)
  .add("Left align", () => (
    <>
      <Portal>
        <Layer parentId="redbox" align="left">
          <Box styled={{ color: COLORS.blue, size: 32 }} />
        </Layer>
      </Portal>
      <Portal>
        <Box id="redbox" styled={{ color: COLORS.orange, size: 64 }} />
      </Portal>
    </>
  ))
  .add("Right align", () => (
    <>
      <Portal>
        <Layer parentId="redbox" align="right">
          <Box styled={{ color: COLORS.blue, size: 32 }} />
        </Layer>
      </Portal>
      <Portal>
        <Box id="redbox" styled={{ color: COLORS.orange, size: 64 }} />
      </Portal>
    </>
  ))
  .add("Layer before target", () => (
    <>
      <Portal>
        <Layer parentId="redbox" align="right">
          <Box styled={{ color: COLORS.blue, size: 32 }} />
        </Layer>
      </Portal>
      <Portal>
        <Box id="redbox" styled={{ color: COLORS.orange, size: 64 }} />
      </Portal>
    </>
  ))
  .add("Layer after target", () => (
    <>
      <Portal>
        <Box id="redbox" styled={{ color: COLORS.orange, size: 64 }} />
      </Portal>
      <Portal>
        <Layer parentId="redbox" align="right">
          <Box styled={{ color: COLORS.blue, size: 32 }} />
        </Layer>
      </Portal>
    </>
  ));
