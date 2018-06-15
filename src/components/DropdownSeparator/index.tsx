import * as React from "react";
import { COLORS } from "../../styles";
import { Dropdown } from "../Dropdown";

export function DropdownSeparator() {
  return (
    <Dropdown.Context.Consumer>
      {({ color }) => (
        <hr
          style={{
            backgroundColor: color === undefined ? COLORS.i08 : "rgba(255, 255, 255, 0.25)",
            border: "none",
            height: "1px",
            margin: "8px 24px"
          }}
        />
      )}
    </Dropdown.Context.Consumer>
  );
}
