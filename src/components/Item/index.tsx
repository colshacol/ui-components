import * as React from "react";
import { classes } from "typestyle";
import { style } from "typestyle-react";

export class Item extends React.PureComponent<JSX.IntrinsicElements["span"]> {
  static class = "__item_component";

  public render() {
    const { className: innerClassName, ...rest } = this.props;
    return <span className={classes(Item.class, className, innerClassName)} {...rest} />;
  }
}

const className = style({
  verticalAlign: "middle"
});
