import * as React from "react";
import TextareaAutosize from "react-autosize-textarea";
import { style } from "typestyle-react";
import {
  BORDER_RADIUS,
  BOX_SHADOW_BORDER,
  BOX_SHADOW_BORDER_DARKER,
  BOX_SHADOW_FOCUS,
  BOX_SHADOW_SITTING,
  COLORS
} from "../../styles";
import { KeyCode } from "../../util/keyboard";
import { OptionalErrorOverlay } from "../OptionalErrorOverlay";
import { Props as SmartTextInputProps } from "../SmartTextInput";

export interface Props extends SmartTextInputProps {
  minRows?: number;
}

export interface State {
  value: string;
}

export class SmartTextInputWrapping extends React.PureComponent<Props, State> {
  public state: Readonly<State> = {
    value: this.props.value
  };

  public componentWillReceiveProps(nextProps: Props) {
    this.setState({
      value: nextProps.value
    });
  }

  private readonly handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target as HTMLTextAreaElement;
    this.setState({
      value: input.value
    });
  };

  private readonly handleBlur = () => {
    if (this.state.value != this.props.value) {
      this.props.onSave(this.state.value);
    } else if (this.props.onDismiss !== undefined) {
      this.props.onDismiss();
    }
  };

  private readonly handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const input = event.target as HTMLTextAreaElement;
    if (event.keyCode === KeyCode.Enter) {
      input.blur();
    } else if (event.keyCode === KeyCode.Escape && this.props.onDismiss !== undefined) {
      this.props.onDismiss();
    }
  };

  public render() {
    const { autofocus, disabled, error, height = 40, minRows, placeholder } = this.props;
    const { value } = this.state;

    return (
      <OptionalErrorOverlay error={error}>
        <TextareaAutosize
          autoFocus={autofocus}
          className={textAreaClassName}
          disabled={disabled}
          onBlur={this.handleBlur}
          onChange={this.handleOnChange}
          onKeyDown={this.handleKeyDown}
          placeholder={placeholder}
          rows={minRows}
          style={{ minHeight: height, padding: `${(height - 24) / 2}px 12px`, resize: "none" }}
          value={value}
        />
      </OptionalErrorOverlay>
    );
  }
}

const textAreaClassName = style({
  backgroundColor: COLORS.white,
  border: "none",
  borderRadius: BORDER_RADIUS,
  boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_SITTING}`,
  boxSizing: "border-box" as "border-box",
  color: COLORS.indigo,
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "24px",
  outline: "none",
  textOverflow: "ellipsis",
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
    },

    "&[disabled]": {
      color: COLORS.i60
    },

    "&[disabled]:hover": {
      boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_SITTING}`
    }
  }
});
