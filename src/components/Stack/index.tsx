import * as React from "react";

export interface Props {
  children: ((api: { push: (child: React.ReactNode) => void; pop: () => void }) => React.ReactNode);
}

export interface State {
  pushed: Array<React.ReactNode>;
}

/**
 * A stateful component to manage a stack (data structure) of components. This
 * is useful for building form wizards, multi-step dropdowns, or other
 * stack-based navigations.
 */
export class Stack extends React.Component<Props, State> {
  public readonly state: State = {
    pushed: []
  };

  private readonly childrenApi = {
    push: (children: React.ReactNode) => {
      this.setState(prevState => ({
        pushed: [...prevState.pushed, children]
      }));
    },
    pop: () => {
      this.setState(prevState => ({
        pushed: prevState.pushed.slice(0, -1)
      }));
    }
  };

  public render() {
    const { pushed } = this.state;
    return pushed.length > 0 ? pushed[pushed.length - 1] : this.props.children(this.childrenApi);
  }
}
