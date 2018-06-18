import * as React from "react";

let counter = 0;

export interface Api {
  readonly id: string;
}

export interface Props {
  children: (api: Api) => React.ReactNode;
}

export class Uid extends React.Component<Props> {
  private readonly api: Api = { id: `_uid${counter++}` };

  public render() {
    return this.props.children(this.api);
  }
}
