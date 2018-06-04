import * as React from "react";

export type ToggleApi = Readonly<{
  active: boolean;
  /**
   * Flip the current value of `active`.
   */
  toggle: () => void;
  /**
   * Set a specific `active` value.
   */
  set: (active: boolean) => void;
  /**
   * Set `active` to `true`.
   */
  setOn: () => void;
  /**
   * Set `active` to `false`.
   */
  setOff: () => void;
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
      setOff: this.setOff,
      setOn: this.setOn,
      toggle: this.toggle
    });
  }

  private readonly toggle = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  private readonly set = (active: boolean) => {
    this.setState({ active });
  };

  private readonly setOn = () => {
    this.setState({ active: true });
  };

  private readonly setOff = () => {
    this.setState({ active: false });
  };
}
