import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Layer } from "../";
import { BlueBox, RedBox } from "../../../util/stories";
import { Portal } from "../../Portal";

storiesOf(Layer.name, module)
  .add("Left align", () => (
    <>
      <Portal>
        <Layer parentId="redbox" align="left">
          <BlueBox styled={{ size: 32 }} />
        </Layer>
      </Portal>
      <Portal>
        <RedBox id="redbox" />
      </Portal>
    </>
  ))
  .add("Right align", () => (
    <>
      <Portal>
        <Layer parentId="redbox" align="right">
          <BlueBox styled={{ size: 32 }} />
        </Layer>
      </Portal>
      <Portal>
        <RedBox id="redbox" />
      </Portal>
    </>
  ))
  .add("Layer before target", () => (
    <>
      <Portal>
        <Layer parentId="redbox" align="right">
          <BlueBox styled={{ size: 32 }} />
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
          <BlueBox styled={{ size: 32 }} />
        </Layer>
      </Portal>
    </>
  ));
