import * as React from "react";
import { styled } from "typestyle-react";
import {
  BORDER_RADIUS,
  BOX_SHADOW_BORDER,
  BOX_SHADOW_BORDER_DARKER,
  BOX_SHADOW_FOCUS,
  BOX_SHADOW_SITTING,
  COLORS
} from "../../styles";
import { OptionalErrorOverlay } from "../OptionalErrorOverlay";

export interface Props {
  autofocus?: boolean;
  defaultValue?: string;
  error?: string;
  maxLength?: number;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
}

export class TextInput extends React.PureComponent<Props> {
  public render() {
    const { autofocus, defaultValue, error, maxLength, onBlur, onChange, onKeyDown, placeholder, value } = this.props;
    return (
      <OptionalErrorOverlay error={error}>
        <Input
          autoFocus={autofocus}
          defaultValue={defaultValue}
          maxLength={maxLength}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          value={value}
        />
      </OptionalErrorOverlay>
    );
  }
}

const Input = styled("input", {
  backgroundColor: COLORS.white,
  border: "none",
  borderRadius: BORDER_RADIUS,
  boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_SITTING}`,
  boxSizing: "border-box" as "border-box",
  color: COLORS.indigo,
  fontSize: "14px",
  fontWeight: 500,
  height: "40px",
  lineHeight: "20px",
  outline: "none",
  padding: "0 12px",
  whiteSpace: "pre-wrap" as "pre-wrap",
  width: "100%",

  $nest: {
    "&:hover": {
      boxShadow: `${BOX_SHADOW_BORDER_DARKER}, ${BOX_SHADOW_SITTING}`
    },

    "&:focus": {
      boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_FOCUS}`
    },

    "&::placeholder, &::-webkit-input-placeholder": {
      color: COLORS.i40
    }
  }
});
