import * as React from "react";
import { styled } from "typestyle-react";
import { SmallText } from "../..";
import { Dropdown } from "../Dropdown";
import { Fragment } from "../Fragment";

export interface Props {
  info: Array<{ label: string; value: string }>;
}

export class InfoDropdown extends React.PureComponent<Props> {
  public render() {
    const { info } = this.props;
    return (
      <Dropdown maxWidth={256}>
        <div style={{ padding: "8px 24px 0" }}>
          {info.map(({ label, value }, i) => (
            <Fragment key={i}>
              <SmallText>{label}</SmallText>
              <Value>{value}</Value>
            </Fragment>
          ))}
        </div>
      </Dropdown>
    );
  }
}

const Value = styled("div", {
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "8px",
  overflow: "hidden",
  textOverflow: "ellipsis"
});
