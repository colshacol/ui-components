import * as React from "react";
import { LocationDescriptor } from "../../routing";
import { ColoredButtonStyle, DefaultButtonStyle } from "../Button";
import { LocationLink } from "../LocationLink";

export interface Props {
  children?: React.ReactNode;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  height?: number;
  id?: string;
  location: LocationDescriptor;
}

export class ButtonLink extends React.Component<Props> {
  public render() {
    const { children, color, disabled = false, fullWidth, height, id, location } = this.props;
    const inner = { id: id, tabIndex: disabled ? -1 : 0, type: "button" };

    return (
      <LocationLink location={location} tabIndex={-1}>
        {color !== undefined ? (
          <ColoredButtonStyle styled={{ color, disabled, height, fullWidth }} {...inner}>
            {children}
          </ColoredButtonStyle>
        ) : (
          <DefaultButtonStyle styled={{ disabled, fullWidth, height }} {...inner}>
            {children}
          </DefaultButtonStyle>
        )}
      </LocationLink>
    );
  }
}
