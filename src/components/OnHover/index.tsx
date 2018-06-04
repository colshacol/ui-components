import * as React from "react";

export interface Props {
  children: React.ReactNode;
  id?: string;
  onMouseEnter: (e: React.MouseEvent<HTMLSpanElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

let counter: number = 0;

export class OnHover extends React.PureComponent<Props, {}> {
  private readonly id = this.props.id !== undefined ? this.props.id : `OnHover_${counter++}`;

  private readonly onMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    this.props.onMouseEnter(e);
  };

  private readonly onMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    this.props.onMouseLeave(e);
  };

  public render() {
    return (
      <span
        id={this.id}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={{ display: "flex", maxWidth: "100%" }}
      >
        {this.props.children}
      </span>
    );
  }
}
