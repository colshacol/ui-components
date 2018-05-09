import * as React from "react";
import { LocationDescriptor } from "../../routing";
import { buttonBaseStyles } from "../Button";
import { LocationLink } from "../LocationLink";
import { SubtleButtonStyle } from "../SubtleButton";

export interface Props {
  children?: React.ReactNode;
  color?: string;
  fullWidth?: boolean;
  id?: string;
  height?: number;
  location: LocationDescriptor;
}

export class SubtleButtonLink extends React.PureComponent<Props> {
  public render() {
    const { children, color = "inherit", fullWidth, height, id, location } = this.props;

    return (
      <LocationLink location={location} tabIndex={-1} style={{ color: color }}>
        <SubtleButtonStyle styled={{ fullWidth, height }} id={id} style={{ ...buttonBaseStyles, color: color }} type="button">
          {children}
        </SubtleButtonStyle>
      </LocationLink>
    );
  }
}
