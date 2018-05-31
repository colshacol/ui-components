import * as React from "react";
import { LocationDescriptor } from "../../routing";
import { LocationLink } from "../LocationLink";
import { SubtleButtonStyle } from "../SubtleButton";

export interface Props {
  children?: React.ReactNode;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  height?: number;
  location: LocationDescriptor;
}

export class SubtleButtonLink extends React.PureComponent<Props> {
  public render() {
    const { children, color = "inherit", disabled = false, fullWidth, height, id, location } = this.props;

    const button = (
      <SubtleButtonStyle styled={{ disabled, fullWidth, height }} id={id} type="button">
        {children}
      </SubtleButtonStyle>
    );

    return disabled ? (
      button
    ) : (
      <LocationLink location={location} tabIndex={-1} style={{ color: color }}>
        {button}
      </LocationLink>
    );
  }
}
