import * as React from "react";

export type ToggleApi = Readonly<{
  active: boolean;
  /**
   * Flip the current value of `active`.
   */
  toggle: () => void;
  /**
   * Explicitly set a specific `active` value.
   */
  set: (active: boolean) => void;
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
    return this.props.children({
      active: this.state.active,
      set: this.set,
      toggle: this.toggle
    });
  }

  private readonly toggle = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  private readonly set = (active: boolean) => {
    this.setState({ active });
  };
}
