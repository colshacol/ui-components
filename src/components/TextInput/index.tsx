import * as React from "react";
import { styled } from "typestyle-react";
import {
  BORDER_RADIUS,
  BOX_SHADOW_BORDER,
  BOX_SHADOW_BORDER_DARKER,
  BOX_SHADOW_FOCUS,
  BOX_SHADOW_SITTING,
  COLORS,
  indigoRgb
} from "../../styles";
import { FlipFlop } from "../FlipFlop";
import IconChevronDownMini from "../Icons/IconChevronDownMini";
import { OptionalErrorOverlay } from "../OptionalErrorOverlay";

export interface Props {
  /**
   * @deprecated use `autoFocus`
   */
  autofocus?: boolean;
  autoFocus?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  /**
   * When blurred, render mimicking the style of another type of input.
   *
   * e.g. "select" tries to mimic a `<select>`. This is useful for advanced
   * components that incorporate interactive elements during input, but want to
   * show a UX hint when the control is idle.
   */
  facade?: "select";
  error?: string;
  height?: number;
  id?: string;
  maxLength?: number;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
}

export class TextInput extends React.PureComponent<Props> {
  public render() {
    const {
      autofocus,
      autoFocus = autofocus,
      facade,
      defaultValue,
      disabled,
      error,
      height,
      id,
      maxLength,
      onBlur,
      onFocus,
      onChange,
      onKeyDown,
      placeholder,
      value
    } = this.props;
    return (
      <FlipFlop>
        {({ active: focused, setOn, setOff }) => (
          <FacadeOverlay facade={focused ? undefined : facade} disabled={disabled}>
            <OptionalErrorOverlay error={error}>
              <Input
                autoFocus={autoFocus}
                defaultValue={defaultValue}
                disabled={disabled}
                id={id}
                maxLength={maxLength}
                onBlur={e => {
                  setOff();
                  if (onBlur !== undefined) {
                    onBlur(e);
                  }
                }}
                onFocus={e => {
                  setOn();
                  if (onFocus !== undefined) {
                    onFocus(e);
                  }
                  if (autoFocus === true) {
                    e.target.select();
                  }
                }}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
                styled={{ height, hasFacade: !focused && facade !== undefined }}
                value={value}
              />
            </OptionalErrorOverlay>
          </FacadeOverlay>
        )}
      </FlipFlop>
    );
  }
}

const Input = styled("input", ({ height = 40, hasFacade }: { height?: number; hasFacade: boolean }) => ({
  backgroundColor: COLORS.white,
  border: "none",
  borderRadius: BORDER_RADIUS,
  boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_SITTING}`,
  boxSizing: "border-box",
  color: COLORS.indigo,
  cursor: hasFacade ? "default" : "auto",
  fontSize: "14px",
  fontWeight: 500,
  height: `${height}px`,
  lineHeight: `${height}px`,
  outline: "none",
  padding: "0 12px",
  paddingRight: hasFacade ? "40px" : undefined,
  textOverflow: "ellipsis",
  whiteSpace: "pre-wrap",
  width: "100%",

  $nest: {
    "&:hover": {
      boxShadow: `${BOX_SHADOW_BORDER_DARKER}, ${BOX_SHADOW_SITTING}`
    },

    "&:focus": {
      boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_FOCUS}`,
      cursor: "auto"
    },

    "&::placeholder, &::-webkit-input-placeholder": {
      color: COLORS.i40
    },

    "&[disabled]": {
      color: COLORS.i60
    },

    "&[disabled]:hover": {
      boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_SITTING}`
    }
  }
}));

const FacadeOverlay: React.SFC<{ facade: Props["facade"]; disabled?: boolean }> = props => {
  const { children, facade, disabled = false } = props;
  return (
    <FacadeOverlayContainer styled={{ disabled }}>
      {children}
      {facade === "select" ? (
        <div data-facade-icon>
          <IconChevronDownMini />
        </div>
      ) : null}
    </FacadeOverlayContainer>
  );
};

const FacadeOverlayContainer = styled("div", (props: { disabled: boolean }) => ({
  position: "relative",

  $nest: {
    "& > [data-facade-icon]": {
      color: `rgba(${indigoRgb}, 0.5)`,
      position: "absolute",
      right: 8,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    },

    ...(props.disabled
      ? {}
      : {
          "&:hover > [data-facade-icon]": {
            color: `rgba(${indigoRgb}, 0.65)`
          }
        })
  }
}));
