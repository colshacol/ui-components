import * as React from "react";
import { style, styled } from "typestyle-react";
import { isLocationDescriptor, LocationDescriptor } from "../../routing";
import { COLORS, purpleRgb } from "../../styles";
import { Dropdown } from "../Dropdown";
import IconArrowUpRightMini from "../Icons/IconArrowUpRightMini";
import { LocationLink } from "../LocationLink";

export interface Props {
  // Either a function which will be called when clicked, or a
  // LocationDescriptor that describes where to navigate on click.
  //
  // An alternative API would be having an `onClick` and `location` prop, but
  // this would fail to prevent the invalid state of passing both. By using a
  // combined `action` prop mutual exclusivity is enforced.
  action?: (() => void) | LocationDescriptor;

  // If true, this item is rendered to show that it is currently active.
  active?: boolean;

  // If true, displays IconArrowUpRight to the right of the item
  // Usually used to indicate clicking will open a new tab
  arrow?: boolean;
  // If true, does not trigger the parent dropdown's `onLeafClick` handler on
  // click.
  branch?: boolean;
  children?: undefined;
  disabled?: boolean;
  height?: number;
  icon?: React.ReactNode;
  value?: React.ReactNode;
  wrap?: boolean;
}

export class DropdownItem extends React.PureComponent<Props> {
  public render() {
    const {
      action,
      active = false,
      arrow = false,
      disabled = false,
      height = 32,
      icon,
      branch = false,
      value,
      wrap = false
    } = this.props;
    const buttonIcon = icon != null ? <IconContainer>{icon}</IconContainer> : null;
    const arrowIcon = arrow ? (
      <ArrowContainer>
        <IconArrowUpRightMini />
      </ArrowContainer>
    ) : null;

    return (
      <Dropdown.Context.Consumer>
        {({ color, onLeafClick }) => {
          const button = (
            <Button styled={{ active, color, disabled, height }}>
              {buttonIcon}
              <Content styled={{ wrap }}>{value}</Content>
              {arrowIcon}
            </Button>
          );
          return disabled ? (
            <span>{button}</span>
          ) : isLocationDescriptor(action) ? (
            <LocationLink
              location={action}
              className={linkClassName}
              tabIndex={-1}
              children={button}
              onClick={!branch ? onLeafClick : undefined}
            />
          ) : (
            <span
              onClick={() => {
                if (action !== undefined) {
                  action();
                }
                if (!branch && onLeafClick !== undefined) {
                  onLeafClick();
                }
              }}
            >
              {button}
            </span>
          );
        }}
      </Dropdown.Context.Consumer>
    );
  }
}

class IconContainer extends React.Component<JSX.IntrinsicElements["span"]> {
  static class = "__icon_container_component";

  public render() {
    const { className: innerClassName, ...rest } = this.props;
    return <span className={`${IconContainer.class} ${iconContainerClassName} ${innerClassName}`} {...rest} />;
  }
}

const iconContainerClassName = style({
  color: COLORS.i60,
  margin: "0 16px 0 0"
});

class ArrowContainer extends React.Component<JSX.IntrinsicElements["span"]> {
  static class = "__arrow_container_component";

  public render() {
    const { className: innerClassName, ...rest } = this.props;
    return <span className={`${ArrowContainer.class} ${arrowContainerClassName} ${innerClassName}`} {...rest} />;
  }
}

const arrowContainerClassName = style({
  color: COLORS.i40,
  marginLeft: "auto",
  opacity: 0,
  paddingLeft: "8px"
});

const Content = styled("span", ({ wrap }: { wrap: boolean }) => ({
  lineHeight: "24px",
  overflow: !wrap ? ("hidden" as "hidden") : undefined,
  textOverflow: "ellipsis",
  whiteSpace: !wrap ? ("nowrap" as "nowrap") : undefined
}));

const linkClassName = style({
  color: "inherit",
  outline: "none",
  textDecoration: "none"
});

const activeBackgroundColor = `rgba(${purpleRgb}, 0.08)`;
const hoverBackgroundColor = `rgba(${purpleRgb}, 0.04)`;

const Button = styled(
  "button",
  ({ active, color, disabled, height }: { active: boolean; color?: string; disabled: boolean; height: number }) => {
    const textColor = color === undefined ? COLORS.indigo : "rgba(255, 255, 255, 0.8)";
    const activeTextColor = color === undefined ? COLORS.purple : COLORS.white;

    return {
      alignItems: "center",
      color: active ? activeTextColor : textColor,
      background: active ? activeBackgroundColor : "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      padding: `${(height - 24) / 2}px 24px`,
      pointerEvents: disabled ? "none" : "all",
      outline: "none",
      opacity: disabled ? 0.5 : 1,
      textAlign: "left",
      textDecoration: "none",
      width: "100%",

      $nest: {
        "&:hover": {
          backgroundColor: active ? activeBackgroundColor : hoverBackgroundColor,
          color: activeTextColor,

          $nest: {
            [`& > .${IconContainer.class}`]: {
              color: activeTextColor
            },
            [`& > .${ArrowContainer.class}`]: {
              opacity: 1
            }
          }
        },
        "&:focus": {
          backgroundColor: activeBackgroundColor,
          color: activeTextColor
        }
      }
    };
  }
);
