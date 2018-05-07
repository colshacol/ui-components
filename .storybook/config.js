import { addDecorator, configure } from "@storybook/react";
import { decorator } from "./decorator";

const req = require.context("../src", true, /.*\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(decorator);
configure(loadStories, module);
