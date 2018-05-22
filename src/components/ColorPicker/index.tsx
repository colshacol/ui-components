import * as React from "react";
import { styled } from "typestyle-react";
import { COLORS, SmartTextInput, SubtleButton } from "../..";
import { Color } from "../Color";
import { Flex } from "../Flex";
import { FlexWrap } from "../FlexWrap";
import { Item } from "../Item";

interface Props {
  allowCustom?: boolean;
  colors: string[];
  onSelect: (color: string | null) => void;
  selected: string | null;
}

interface State {
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
                  <Item>
                    <Color
                      color={colorLowerCase}
                      key={colorLowerCase}
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
                autofocus
                error={error}
                height={32}
                onSave={value => {
                  this.selectColor(value);
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

  private selectColor = (color: string | null) => {
    if (color !== null && color.match("^#([A-Fa-f0-9]{6})$") !== null) {
      this.setState({ error: undefined, selected: color.toLowerCase() });
      this.props.onSelect(color);
    } else if (color !== null) {
      this.setState({ error: "Invalid" });
    } else {
      this.setState({ error: undefined, selected: null });
    }
  };
}

const Container = styled("div", {
  width: "112px"
});
