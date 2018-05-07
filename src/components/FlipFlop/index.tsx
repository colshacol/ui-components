import * as React from "react";

export type ToggleApi = Readonly<{
  active: boolean;
  toggle: () => void;
}>;

export interface Props {
  children: (api: ToggleApi) => React.ReactNode;
}

export interface State {
  active: boolean;
}

export class FlipFlop extends React.Component<Props, State> {
  public readonly state: State = {
    active: false
  };

  public render() {
    return this.props.children({ toggle: this.toggle, active: this.state.active });
  }

  private readonly toggle = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };
}
