import { storiesOf } from "@storybook/react";
import * as React from "react";
import { from, timer } from "rxjs";
import { RxSubscribe } from "..";

storiesOf(RxSubscribe.name, module)
  .add("Finite", () => <RxSubscribe to={from([1, 2, 3])}>{value => <p>Value: {value}</p>}</RxSubscribe>)
  .add("Infinite", () => <RxSubscribe to={timer(1000, 500)}>{value => <p>Value: {value}</p>}</RxSubscribe>);
