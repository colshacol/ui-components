import * as React from "react";
import { styled } from "typestyle-react";
import { COLORS, SmartTextInput, SubtleButton } from "../..";
import { Color } from "../Color";
import { Flex } from "../Flex";
import { FlexWrap } from "../FlexWrap";
import { Item } from "../Item";

const convertShorthandHex = require("color-shorthand-hex-to-six-digit");

export interface Props {
  allowCustom?: boolean;
  colors: string[];
  onSelect: (color: string | null) => void;
  selected: string | null;
}

export interface State {
  error?: string;
  selected: string | null;
}

export class ColorPicker extends React.PureComponent<Props, State> {
  public state: State = {
    selected: this.props.selected !== null ? this.props.selected.toLowerCase() : this.props.selected
  };

  public render() {
    const { allowCustom = true, colors } = this.props;
    const { error, selected } = this.state;

    return (
      <Container>
        <Flex styled={{ gap: 8, layout: "column" }}>
          <Item>
            <FlexWrap styled={{ gap: 8 }}>
              {colors.map(color => {
                const colorLowerCase = color.toLowerCase();
                return (
                  <Item key={colorLowerCase}>
                    <Color
                      color={colorLowerCase}
                      selected={selected === colorLowerCase}
                      onClick={() => {
                        this.selectColor(colorLowerCase);
                      }}
                    />
                  </Item>
                );
              })}
            </FlexWrap>
          </Item>
          {allowCustom ? (
            <Item>
              <SmartTextInput
                error={error}
                height={32}
                onSave={value => {
                  this.selectColor(value.toLowerCase());
                }}
                placeholder="Custom HEX"
                value={selected !== null ? selected : ""}
              />
            </Item>
          ) : null}
          <Item>
            <SubtleButton
              color={COLORS.i60}
              fullWidth
              onClick={() => {
                this.selectColor(null);
              }}
            >
              Reset
            </SubtleButton>
          </Item>
        </Flex>
      </Container>
    );
  }

  private readonly selectColor = (color: string | null) => {
    if (color !== null && color.match("^#(?:[0-9a-fA-F]{3}){1,2}$") !== null) {
      const hex = convertShorthandHex(color);
      this.setState({ error: undefined, selected: hex });
      this.props.onSelect(hex);
    } else if (color !== null) {
      this.setState({ error: "Invalid" });
    } else {
      this.setState({ error: undefined, selected: null });
      this.props.onSelect(null);
    }
  };
}

const Container = styled("div", {
  width: "112px"
});
