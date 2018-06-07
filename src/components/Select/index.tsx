import * as React from "react";
import { styled } from "typestyle-react";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import { DropdownItem } from "../DropdownItem";
import { FlipFlop } from "../FlipFlop";
import IconChevronDownMini from "../Icons/IconChevronDownMini";
import { Justify } from "../Justify";
import { Layer } from "../Layer";
import { Portal } from "../Portal";

export interface Props<T> {
  align?: "left" | "right";
  chevron?: boolean;
  defaultText?: string;
  height?: number;
  onSelect: (value: T) => void;
  options: ReadonlyArray<SelectOption<T>>;
}

export interface SelectOption<T> {
  selected: boolean;
  value: T;
  text: string;
}

let counter: number = 0;

export class Select<T = string> extends React.PureComponent<Props<T>> {
  private readonly id = `Select_${counter++}`;

  public render() {
    const { align = "left", chevron = true, defaultText = "Select…", height = 40, onSelect, options } = this.props;
    const activeOption = options.find(option => option.selected === true);
    const text = activeOption !== undefined ? activeOption.text : defaultText;

    return (
      <FlipFlop>
        {({ toggle, active }) => (
          <>
            <Button height={height} id={this.id} onClick={toggle}>
              <Justify>
                <Text>{text}</Text>
                {chevron ? (
                  <span style={{ marginLeft: "8px" }}>
                    <IconChevronDownMini />
                  </span>
                ) : null}
              </Justify>
            </Button>
            {active ? (
              <Portal>
                <Layer align={align} onDismissAttempt={toggle} parentId={this.id}>
                  <Dropdown maxWidth={320}>
                    {options.map(({ value, selected, text }, i) => (
                      <DropdownItem
                        action={() => {
                          onSelect(value);
                        }}
                        active={selected}
                        key={i}
                        value={text}
                      />
                    ))}
                  </Dropdown>
                </Layer>
              </Portal>
            ) : null}
          </>
        )}
      </FlipFlop>
    );
  }
}

const Text = styled("span", {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});
