import { addDecorator, configure } from "@storybook/react";
import { decorator } from "./decorator";

// Must be performed before `require.context()`, see
// https://github.com/storybooks/storybook/issues/3246#issuecomment-374790016
addDecorator(decorator);

const req = require.context("../src", true, /.*\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
