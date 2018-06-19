import * as React from "react";

export interface Props {
  accept?: string;
  onPick: (file: File) => void;
}

/**
 * A wrapper around `<input type="file" />` that allows a file to be picked from
 * the user's local device.
 */
export class FilePicker extends React.Component<Props> {
  public render() {
    return (
      <input
        type="file"
        style={{ display: "none" }}
        ref={input => {
          if (input instanceof Element) {
            if (this.props.accept !== undefined) {
              input.accept = this.props.accept;
            }
            // Trigger the browser's native file picker to open.
            input.click();
          }
        }}
        onChange={this.handleChange}
      />
    );
  }

  private readonly handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      this.props.onPick(files[0]);
    }
  };
}
