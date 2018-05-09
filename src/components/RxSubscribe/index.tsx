import * as React from "react";
import { Observable, Subscription } from "rxjs";

export interface Props<T> {
  to: Observable<T>;
  children: (value: T) => React.ReactNode;
}

export type State<T> = { hasValue: false } | { hasValue: true; value: T };

/**
 * Subscribe to an Rx [Observable](http://reactivex.io/documentation/observable.html).
 *
 * @example
 *
 *    <RxSubscribe to={Observable.from([1, 2, 3])}>
 *    {number => (
 *      <p>Value: {number}</p>
 *    )}
 *    </RxSubscribe>
 */
export class RxSubscribe<T> extends React.Component<Props<T>, State<T>> {
  private subscription!: Subscription;

  public readonly state: State<T> = {
    hasValue: false
  };

  public componentDidMount() {
    this.subscribe();
  }

  public componentWillReceiveProps(nextProps: Props<T>) {
    if (this.props.to !== nextProps.to) {
      this.subscription.unsubscribe();
      this.subscribe(nextProps);
    }
  }

  public componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  public render() {
    return this.state.hasValue ? this.props.children(this.state.value) : null;
  }

  private readonly subscribe = (props = this.props) => {
    this.setState({ hasValue: false });
    this.subscription = props.to.subscribe(value => {
      this.setState({ value, hasValue: true });
    });
  };
}
