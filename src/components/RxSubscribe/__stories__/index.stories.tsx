import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Observable } from "rxjs";
import { RxSubscribe } from "..";

storiesOf(RxSubscribe.name, module)
  .add("Finite", () => <RxSubscribe to={Observable.from([1, 2, 3])}>{value => <p>Value: {value}</p>}</RxSubscribe>)
  .add("Infinite", () => <RxSubscribe to={Observable.timer(1000, 500)}>{value => <p>Value: {value}</p>}</RxSubscribe>);
