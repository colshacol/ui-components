import * as React from "react";
import { styled } from "typestyle-react";
import { COLORS } from "../../styles";
import { Dropdown } from "../Dropdown";

export interface Props {
  info: Array<{ label: string; value: string }>;
}

export class InfoDropdown extends React.PureComponent<Props> {
  public render() {
    const { info } = this.props;
    return (
      <Dropdown>
        <div style={{ padding: "8px 24px" }}>
          <Table>
            <tbody>
              {info.map(({ label, value }, i) => (
                <tr key={i}>
                  <Label>{label}</Label>
                  <Value>{value}</Value>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Dropdown>
    );
  }
}

const Table = styled("table", {
  borderCollapse: "collapse"
});

const Label = styled("td", {
  color: COLORS.i60,
  fontSize: "12px",
  fontWeight: 600,
  paddingRight: "24px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  verticalAlign: "top"
});

const Value = styled("td", {
  fontSize: "12px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  verticalAlign: "top"
});
