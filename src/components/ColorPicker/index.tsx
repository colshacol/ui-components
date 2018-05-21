import * as React from "react";
import { COLORS } from "../../styles";
import { Color } from "../Color";
import { Grid } from "../Grid";
import { Item } from "../Item";

interface Props {
  colors: string[];
  selected?: string | null;
  onSelect?: (color: string | null) => void;
}

export class ColorPicker extends React.PureComponent<Props> {
  public render() {
    const { colors, selected, onSelect } = this.props;
    const selectedLower = typeof selected === "string" ? selected.toLowerCase() : selected;

    return (
      <Grid styled={{ gap: 8, gridTemplateColumns: "1fr 1fr 1fr" }}>
        {colors.map(color => {
          const colorLower = color.toLowerCase();
          return (
            <Item key={colorLower}>
              <Color
                color={colorLower}
                selected={selectedLower === colorLower}
                onClick={() => {
                  if (onSelect !== undefined) {
                    onSelect(colorLower);
                  }
                }}
              />
            </Item>
          );
        })}
        <Item>
          <Color
            color={COLORS.i04}
            selected={false}
            strikethrough={true}
            onClick={() => {
              if (onSelect !== undefined) {
                onSelect(null);
              }
            }}
          />
        </Item>
      </Grid>
    );
  }
}
